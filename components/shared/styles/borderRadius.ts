import { Platform } from "react-native";

export const borderRadius = Platform.select({
  android: {
    borderRadius: 8,
  },
  ios: {
    borderRadius: 8,
  },
  web: {
    borderRadius: 0,
  }
}) || {}