export const NETWORK_IP = "192.168.8.152";
export const PORT = 3001; // Define your port here

export type FileType = {
  key: string;
  url: string;
  documentType: "docx" | "pptx" | "xlsx" | "pdf";
};

export const files: Array<FileType> = [
  {
    key: "SampleDoc.docx",
    url: `http://${NETWORK_IP}:${PORT}/SampleDoc.docx`,
    documentType: "docx",
  },
  {
    key: "SamplePresentation.pptx",
    url: `http://${NETWORK_IP}:${PORT}/SamplePresentation.pptx`,
    documentType: "pptx",
  },
  {
    key: "SampleExcel.xlsx",
    url: `http://${NETWORK_IP}:${PORT}/SampleExcel.xlsx`,
    documentType: "xlsx",
  },
  {
    key: "SamplePdf.pdf",
    url: `http://${NETWORK_IP}:${PORT}/SamplePdf.pdf`,
    documentType: "pdf",
  },
  // Add more files as needed
];
