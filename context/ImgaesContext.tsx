import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export interface IImage {
  id: number;
  uri: string;
}

interface IUsersContext {
  images: IImage[];
  setImages: Dispatch<SetStateAction<IImage[]>>;
}
export const ImagesContext = createContext<IUsersContext>({} as IUsersContext)

interface RProps {
  children: ReactNode;
}

export const ImagesProvider = ({children}: RProps) => {
  const [images, setImages] = useState<IImage[]>([])
  const value: IUsersContext = {
    images,
    setImages,
  }
  
  return <ImagesContext.Provider value={value}> 
    {children} 
  </ImagesContext.Provider>
}