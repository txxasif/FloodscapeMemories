export interface ChildrenPropsType {
  children: React.ReactNode;
}

export interface Image {
  name: string;
  dataURL: string | ArrayBuffer | null; // Store base64 encoded data
}
export interface ImageProps {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
  blurDataUrl?: string;
  version: number;
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}
export interface NotificationItem {
  name: string;
  message: string;
  icon: string;
  time: string;
}
