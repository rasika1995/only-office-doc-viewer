import { DocumentEditor } from "@onlyoffice/document-editor-react";

type DocumentFileType = "xlsx" | "pptx" | "docx" | "pdf" | "doc";

interface DocumentConfigProps {
  fileUrl: string;
  fileKey: string;
  documentType: DocumentFileType;
  info?: {
    owner?: string;
    uploaded?: string;
    favorite?: boolean;
    folder?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sharingSettings?: any[];
  };
  permissions: {
    chat?: boolean;
    comment?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    commentGroups?: any;
    copy?: boolean;
    deleteCommentAuthorOnly?: boolean;
    download?: boolean;
    edit?: boolean;
    editCommentAuthorOnly?: boolean;
    fillForms?: boolean;
    modifyContentControl?: boolean;
    modifyFilter?: boolean;
    print?: boolean;
    protect?: boolean;
    review?: boolean;
    reviewGroups?: string[];
    userInfoGroups?: string[];
  };
  editorMode: "edit" | "view";
  callbackUrl?: string;
}

const OnlyOfficeDocEditor = ({
  fileUrl,
  fileKey,
  documentType,
  permissions,
  info,
  editorMode,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  callbackUrl,
}: DocumentConfigProps) => {
  const documentServerUrl = "http://localhost:3000/"; // Your ONLYOFFICE Document Server URL

  const onDocumentReady = () => {
    console.log("Document is ready to view");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onLoadComponentError = (errorCode: any, errorDescription: any) => {
    console.error(`Error code: ${errorCode}, Description: ${errorDescription}`);
  };

  // Map file types to document types
  const documentTypeMap: Record<DocumentFileType, string> = {
    xlsx: "cell",
    pptx: "slide",
    docx: "word",
    doc: "word",
    pdf: "pdf",
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <DocumentEditor
        config={{
          document: {
            fileType: documentType,
            key: fileKey,
            title: fileKey,
            url: fileUrl,
            ...(permissions && { permissions: { ...permissions } }), // Only include permissions if defined
            ...(info && { info: { ...info } }), // Only include permissions if defined
          },
          documentType: documentTypeMap[documentType],
          editorConfig: {
            // callbackUrl,
            mode: editorMode, // Mode comes from props
            customization: {
              // anonymous: {
              //   request: true,
              //   label: 'Guest'
              // }
              // autosave: true
              // comments: true,
              // compactHeader: false,
              // compactToolbar: false,
              // compatibleFeatures: false,
              customer: {
                address: "My City, 123a-45",
                info: "Some additional information",
                logo: "http://192.168.8.152:3001/FileFlex.svg",
                logoDark: "http://192.168.8.152:3001/FileFlexDark.svg",
                mail: "john@example.com",
                name: "John Smith and Co.",
                phone: "123456789",
                www: "example.com",
              },
              // forcesave: false,
              goback: {
                blank: false,
                text: "Open file location",
                url: "http://192.168.8.152:3001/",
              },
              // feedback: true,
              feedback: {
                url: "https://example.com",
                visible: true,
              },
              help: true,
              hideRightMenu: true,
              hideRulers: false,
              // integrationMode: "embed",
              logo: {
                image: "http://192.168.8.152:3001/FileFlex.svg",
                imageDark: "http://192.168.8.152:3001/FileFlexDark.svg",
                imageEmbedded: "http://192.168.8.152:3001/FileFlex.svg",
                url: "http://192.168.8.152:3001/",
              },
              // macros: true,
              // macrosMode: "Warn",
              // mentionShare: true,
              // mobileForceView: true,
              // plugins: true,
              // spellcheck: true,
              submitForm: true,
              // toolbarHideFileName: false,
              // toolbarNoTabs: false,
              // uiTheme: "theme-dark",
              unit: "cm",
              zoom: 100,
            },
          },
        }}
        documentServerUrl={documentServerUrl}
        events_onDocumentReady={onDocumentReady}
        onLoadComponentError={onLoadComponentError}
        height="100%"
        width="100%"
        type="desktop"
        id={`editor-${fileKey}`} // Unique ID for the editor
      />
    </div>
  );
};

export default OnlyOfficeDocEditor;
