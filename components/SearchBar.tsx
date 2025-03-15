import { View, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface SearchBarProps {
  placeHolder: string;
  searchKey: string;
  setSearchKey: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchKey,
  setSearchKey,
  placeHolder,
}) => {
  return (
    <View className="flex-row items-center h-12 px-4 bg-black rounded-full gap-x-2">
      <Image source={icons.search} className="w-5 h-5" />
      <TextInput
        value={searchKey}
        onChangeText={setSearchKey}
        placeholder={placeHolder}
        placeholderTextColor="#a8b5db"
        returnKeyType="search"
        className="flex-1 text-white"
        accessibilityLabel="Search movies"
      />
    </View>
  );
};

export default SearchBar;
