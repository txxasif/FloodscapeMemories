import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { useHotkeys } from "react-hotkeys-hook";
import type { ImageProps } from "@/types";
import SharedModal from "@/components/SharedModal";
import { usePidStore } from "@/store/pid-store";

export default function Modal({
  images,
  onClose,
}: {
  images: ImageProps[];
  onClose?: () => void;
}) {
  let overlayRef = useRef<HTMLDivElement | null>(null);
  const photoId = usePidStore((state) => state.pid);
  const setPid = usePidStore((state) => state.setPid);
  let index = Number(photoId);

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  function handleClose() {
    // router.push("/");
    setPid(-10);
    if (onClose) {
      onClose();
    }
  }
  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
    setPid(newVal);
  }

  useHotkeys("ArrowRight", () => {
    console.log("ArrowRight");

    if (index + 1 < images.length) {
      changePhotoId(index + 1);
    }
  });

  useHotkeys("ArrowLeft", () => {
    if (index > 0) {
      changePhotoId(index - 1);
    }
  });

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  );
}
