export type FileType = {
  key: string;
  url: string;
  documentType: "docx" | "pptx" | "xlsx" | "pdf"; // Restrict to known file types
};

export const files: Array<FileType> = [
  {
    key: "SampleDoc.docx",
    url: "http://192.168.8.152:3001/SampleDoc.docx",
    documentType: "docx",
  },
  {
    key: "SamplePresentation.pptx",
    url: "http://192.168.8.152:3001/SamplePresentation.pptx",
    documentType: "pptx",
  },
  {
    key: "SampleExcel.xlsx",
    url: "http://192.168.8.152:3001/SampleExcel.xlsx",
    documentType: "xlsx",
  },
  {
    key: "SamplePdf.pdf",
    url: "http://192.168.8.152:3001/SamplePdf.pdf",
    documentType: "pdf",
  },
  // Add more files as needed
];
