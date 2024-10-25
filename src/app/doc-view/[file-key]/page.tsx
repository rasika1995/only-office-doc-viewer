"use client";
import { notFound } from "next/navigation";
import OnlyOfficeDocEditor from "@/components/OnlyOfficeDocEditor"; // Your OnlyOffice component
import { files } from "@/data/fileData";

type Params = {
  params: { "file-key": string };
};

const DocumentViewer = ({ params }: Params) => {
  const { "file-key": fileKey } = params;

  const callbackUrl = `http://192.168.8.152:3001/api/docs/callback/${fileKey}`;

  // Find the file from the files array
  const file = files.find((f) => f.key === fileKey);

  if (!file) {
    return notFound(); // Handle file not found
  }

  // Pass the file details to the OnlyOfficeDocEditor component
  return (
    <div>
      <OnlyOfficeDocEditor
        fileUrl={file.url}
        fileKey={file.key}
        documentType={file.documentType}
        info={{
          // favorite: false,
          // folder: "Example Files",
          // owner: "John Smith",
          // sharingSettings: [
          //   {
          //     permissions: "Full Access",
          //     user: "John Smith",
          //   },
          //   {
          //     permissions: "Full Access",
          //     user: "Test User",
          //   },
          // ],
          // uploaded: "2010-07-07 3:46 PM",
        }}
        permissions={
          {
            // chat: false,
            // comment: false,
            // commentGroups: [""]
            // copy: false,
            // deleteCommentAuthorOnly: true,
            // download: false,
            // edit: false,
            // editCommentAuthorOnly: true,
            // fillForms: false
            // modifyContentControl: false,
            // modifyFilter: false,
            // print: false,
            // protect: false,
            // review: true,
            // reviewGroups: [""],
            // userInfoGroups: [""]
          }
        } // https://api1.onlyoffice.com/editors/config/document/permissions#:~:text=In%20case%20edit%20is%20set%20to%20%22true%22%20and%20review%20is,be%20able%20to%20edit%20only.
        editorMode="edit" // Change this to "edit" or "view" based on your needs - https://api1.onlyoffice.com/editors/config/editor
        callbackUrl={callbackUrl}
      />
    </div>
  );
};

export default DocumentViewer;
