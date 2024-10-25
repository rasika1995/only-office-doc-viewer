import { files, FileType } from "@/data/fileData";
import Link from "next/link";

const HomePage = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9", height: '100vh' }}>
      <h1 style={{ fontSize: "2em", color: "#333" }}>Document List</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {files.map((file: FileType) => (
          <li key={file.key} style={{ margin: "10px 0" }}>
            <Link href={`/doc-view/${file.key}`}>{file.key}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
