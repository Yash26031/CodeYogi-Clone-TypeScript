import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import AssignmentListPage from "./Pages/AssignmentListPage";
import LectureListPage from "./Pages/LectureListPage";
import StudentsListPage from "./Pages/StudentsListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="assignments" element={<AssignmentListPage />} />

          <Route path="lectures" element={<LectureListPage />} />
          <Route path="studentsList" element={<StudentsListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
