import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import useKeypress from "react-use-keypress";
import { ImageProps } from "@/types";
import SharedModal from "./SharedModal";
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
  const router = useRouter();
  let index = Number(photoId);

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  function handleClose() {
    router.push("/");
    setPid(null);

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
    router.push(`/p/${newVal}`);
  }

  useKeypress("ArrowRight", () => {
    console.log("ArrowRight");

    if (index + 1 < images.length) {
      changePhotoId(index + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      changePhotoId(index - 1);
    }
  });

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      {/* Manually creating the overlay */}
      <motion.div
        ref={overlayRef}
        className="fixed inset-0 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <div className="relative z-50">
        <DialogPanel className="max-w-lg p-6 space-y-4 bg-white rounded-md">
          <SharedModal
            index={curIndex}
            direction={direction}
            images={images}
            changePhotoId={changePhotoId}
            closeModal={handleClose}
            navigation={true}
          />
        </DialogPanel>
      </div>
    </Dialog>
  );
}
