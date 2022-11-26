import { ChangeEvent, MouseEvent, RefObject } from "react";

export interface IBoardWriteProps {
  isEdit?: boolean;
  data?: any;
}

export interface IMyUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}

export interface IBoardWriteUIProps {
  myWriterError: string;
  myPasswordError: string;
  myTitleError: string;
  myContentsError: string;
  onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeMyYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;

  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onToggleModal: () => void;
  onClickMyImage: () => void;
  handleComplete: (data: any) => void;
  fileRef: RefObject<HTMLInputElement>;
  isActive: boolean;
  isEdit?: boolean;
  isOpen: boolean;
  data?: any;
  myImages: string[];
  myZonecode: string;
  myAddress: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
