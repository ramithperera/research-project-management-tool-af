import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import FileUpload from "./components/admin/FileUpload";
import AdminHome from "./components/admin/AdminHome";
import AddTemplate from "./components/admin/templates/AddTemplate";
import ViewTemplates from "./components/admin/templates/ViewTemplates";
import ViewTemplateAdmin from "./components/admin/templates/ViewTemplatesAdmin";
import ResponsiveAppBar from "./components/admin/ResponsiveAppBar";
import UpdateTemplate from "./components/admin/templates/UpdateTemplate";
import RegisterStudent from "./components/admin/Users/Student/RegisterStudent";
import ViewStudents from "./components/admin/Users/Student/ViewStudents";
import ViewStaff from "./components/admin/Users/Staff/ViewStaff";
import RegisterStaff from "./components/admin/Users/Staff/RegisterStaff";
import Login from "./components/Login";
import SupervisorHome from "./components/SupervisorHome";
import StudentHome from "./components/StudentHome";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <style>{"body { background-color: #f1f3f0; }"}</style>
      <BrowserRouter>
        <ResponsiveAppBar />

        {/* routes */}
        <Routes>
          <Route path="/" element={<Login />}></Route>

          <Route path="/templates/add" element={<FileUpload />}></Route>
          <Route path="/admin-home" element={<AdminHome />}></Route>
          <Route path="/addTemplate" element={<AddTemplate />}></Route>
          <Route path="/viewTemplates" element={<ViewTemplates />}></Route>

          <Route
            path="/admin/templates"
            element={<ViewTemplateAdmin />}
          ></Route>
          <Route
            path="admin/templates/update/:id"
            element={<UpdateTemplate />}
          ></Route>

          <Route path="/registerStudent" element={<RegisterStudent />}></Route>
          <Route path="/registerStaff" element={<RegisterStaff />}></Route>
          <Route path="/admin/students" element={<ViewStudents />}></Route>
          <Route path="/admin/staff" element={<ViewStaff />}></Route>
          <Route path="/supervisor" element={<SupervisorHome />}></Route>
          <Route path="/student" element={<StudentHome />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
