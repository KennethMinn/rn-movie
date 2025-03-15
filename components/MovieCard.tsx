import { TouchableOpacity, Image, Text, View } from "react-native";
import React, { FC } from "react";
import { Movie } from "@/interfaces/interfaces";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";

const MovieCard: FC<Movie> = ({
  release_date,
  id,
  poster_path,
  title,
  vote_average,
}) => {
  return (
    //asChild to be able to click TouchableOpacity, Link only takes text as a child
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-full ">
        <Image
          className="w-full rounded-lg h-52"
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placehold.co/600x400/1a1a1a/ffffff.png`,
          }}
        />
        <Text className="mt-2 text-white" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row justify-between ">
          <View className="flex-row items-center font-semibold">
            <Image source={icons.star} className="size-4" tintColor="yellow" />
            <Text className="text-white ">{Math.round(vote_average / 2)}</Text>
          </View>
          <Text className="text-sm text-white/70">
            {release_date?.split("-")[0]}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
