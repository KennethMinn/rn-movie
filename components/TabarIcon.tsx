import { Image, View } from "react-native";
import React, { FC } from "react";

interface TabarIconProps {
  focused: boolean;
  icon: any;
}

const TabarIcon: FC<TabarIconProps> = ({ focused, icon }) => {
  return (
    <View className=" flex-1 bg-[#0f0D23]  min-w-[100px] min-h-10 size-full items-center justify-center">
      <Image
        source={icon}
        tintColor={focused ? "#fff" : "#8d99ae"}
        className=" size-6"
      />
    </View>
  );
};

export default TabarIcon;
