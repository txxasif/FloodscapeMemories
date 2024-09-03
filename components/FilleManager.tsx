import React from "react";
import { File, Folder, Tree } from "@/components/magicui/file-tree";
import Link from "next/link";

export function FilleManager() {
  return (
    <div className="relative flex h-fit w-2/3 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Tree
        className="p-2 overflow-hidden rounded-md bg-background"
        initialSelectedId="7"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
        ]}
      >
        <Folder element="memories" value="1">
          <Folder value="2" element="2023">
            <File value="3">
              <Link href={"/memories/winter-memories"}>
                winter-memories.html
              </Link>
            </File>
          </Folder>
          <Folder value="4" element="2024">
            <File value="5">
              <Link href={"/memories/flood-memories"}>flood.html</Link>
            </File>
          </Folder>
          <Folder value="6" element="lib">
            <File value="7">
              <p>utils.ts</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}

// const ELEMENTS = [
//   {
//     id: "1",
//     isSelectable: true,
//     name: "memories",
//     children: [
//       {
//         id: "2",
//         isSelectable: true,
//         name: "2024",
//         children: [
//           {
//             id: "3",
//             isSelectable: true,
//             name: "layout.tsx",
//           },
//           {
//             id: "4",
//             isSelectable: true,
//             name: "page.tsx",
//           },
//         ],
//       },
//       {
//         id: "5",
//         isSelectable: true,
//         name: "components",
//         children: [
//           {
//             id: "6",
//             isSelectable: true,
//             name: "header.tsx",
//           },
//           {
//             id: "7",
//             isSelectable: true,
//             name: "footer.tsx",
//           },
//         ],
//       },
//       {
//         id: "8",
//         isSelectable: true,
//         name: "lib",
//         children: [
//           {
//             id: "9",
//             isSelectable: true,
//             name: "utils.ts",
//           },
//         ],
//       },
//     ],
//   },
// ];
