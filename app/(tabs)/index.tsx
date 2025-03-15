import { useEffect, useState, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useDebounce } from "@/hooks/useDebounce";
import { Movie } from "@/interfaces/interfaces";
import { getMovies } from "@/services/api";
import { useFetch } from "@/services/useFetch";

export default function Index() {
  const [searchKey, setSearchKey] = useState("");
  const debouncedSearchKey = useDebounce(searchKey.trim(), 500);

  const {
    data: movies,
    isLoading,
    error,
    refetch,
  } = useFetch(() => getMovies({ query: debouncedSearchKey }));

  useEffect(() => {
    if (debouncedSearchKey !== undefined) {
      refetch();
    }
  }, [debouncedSearchKey]);

  const renderMovieCard = ({ item }: { item: Movie }) => (
    <View className="w-[31%]">
      <MovieCard {...item} />
    </View>
  );

  const headerTitle = useMemo(
    () =>
      debouncedSearchKey
        ? `Search result for ${debouncedSearchKey}`
        : "Latest Movies",
    [debouncedSearchKey]
  );

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full" />
      <SafeAreaView className="items-center flex-1 px-6">
        <Image source={icons.logo} className="mb-4" />
        <SearchBar
          searchKey={searchKey}
          placeHolder="Search"
          setSearchKey={setSearchKey}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" className="mt-10" />
        ) : error ? (
          <Text className="mt-5 text-center text-red-500">
            Error: {error.message}
          </Text>
        ) : (
          <View className="w-full">
            <FlatList
              data={movies as Movie[]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderMovieCard}
              ListHeaderComponent={
                <Text className="mt-5 mb-3 text-lg font-bold text-white">
                  {headerTitle}
                </Text>
              }
              showsVerticalScrollIndicator={false}
              contentContainerClassName="gap-y-4"
              numColumns={3}
              columnWrapperClassName="gap-x-3"
            />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
