import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Calendar,
  Users,
  Library,
  Award,
  ExternalLink,
  FileText,
  Download,
  Filter,
} from "lucide-react";

interface Program {
  id: string;
  name: string;
  level: string;
  duration: string;
  seats: number;
  affiliation: string;
  description?: string;
  eligibility?: string;
  curriculum?: string[];
}

interface Department {
  id: string;
  name: string;
  hod: string;
  faculty: number;
  labs: number;
  description?: string;
  specializations?: string[];
}

interface AcademicDocument {
  id: string;
  title: string;
  description?: string;
  link?: string;
  level: string;
  program: string;
  semester: string;
  date: string;
}

const AcademicsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("programs");
  const [programs, setPrograms] = useState<Program[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [attendance, setAttendance] = useState<AcademicDocument[]>([]);
  const [internalMarks, setInternalMarks] = useState<AcademicDocument[]>([]);
  const [loading, setLoading] = useState(true);

  // Filtering state
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedProgram, setSelectedProgram] = useState("All Programs");
  const [selectedSemester, setSelectedSemester] = useState("All Semesters");

  const tabs = [
    { id: "programs", label: "Academic Programs" },
    { id: "departments", label: "Departments" },
    { id: "attendance", label: "Attendance" },
    { id: "internal-marks", label: "Internal Marks" },
  ];

  const levels = ["All Levels", "UG", "PG"];
  const semesters = React.useMemo(() => {
    const allSemesters = [
      "All Semesters",
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ];

    if (selectedLevel === "PG") {
      return allSemesters.slice(0, 5); // All Semesters + Sem 1-4
    }
    return allSemesters;
  }, [selectedLevel]);

  // Derive available programs based on selected level
  const availablePrograms = React.useMemo(() => {
    let filtered = programs;
    if (selectedLevel === "UG") {
      filtered = programs.filter((p) => p.level === "Undergraduate");
    } else if (selectedLevel === "PG") {
      filtered = programs.filter((p) => p.level === "Postgraduate");
    }
    return ["All Programs", ...filtered.map((p) => p.name)];
  }, [programs, selectedLevel]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          programsResponse,
          departmentsResponse,
          attendanceResponse,
          internalMarksResponse,
        ] = await Promise.all([
          fetch("/api/admin/academics/programs"),
          fetch("/api/admin/academics/departments"),
          fetch("/api/admin/academics/attendance"),
          fetch("/api/admin/academics/internal-marks"),
        ]);

        if (programsResponse.ok) {
          const programsData = await programsResponse.json();
          setPrograms(programsData);
        }

        if (departmentsResponse.ok) {
          const departmentsData = await departmentsResponse.json();
          setDepartments(departmentsData);
        }

        if (attendanceResponse.ok) {
          const attendanceData = await attendanceResponse.json();
          setAttendance(attendanceData);
        }

        if (internalMarksResponse.ok) {
          const internalMarksData = await internalMarksResponse.json();
          setInternalMarks(internalMarksData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Reset filters when tab changes
  useEffect(() => {
    setSelectedLevel("All Levels");
    setSelectedProgram("All Programs");
    setSelectedSemester("All Semesters");
  }, [activeTab]);

  const filterDocuments = (documents: AcademicDocument[]) => {
    return documents.filter((doc) => {
      let matchLevel = false;
      if (selectedLevel === "All Levels") {
        matchLevel = true;
      } else if (selectedLevel === "UG") {
        matchLevel = doc.level === "Undergraduate";
      } else if (selectedLevel === "PG") {
        matchLevel = doc.level === "Postgraduate";
      } else {
        matchLevel = doc.level === selectedLevel;
      }

      const matchProgram =
        selectedProgram === "All Programs" || doc.program === selectedProgram;
      const matchSemester =
        selectedSemester === "All Semesters" ||
        doc.semester === selectedSemester;
      return matchLevel && matchProgram && matchSemester;
    });
  };

  const renderDocumentList = (documents: AcademicDocument[], type: string) => {
    const filteredDocs = filterDocuments(documents);

    return (
      <div className="space-y-6">
        {/* Filters */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => {
                  setSelectedLevel(e.target.value);
                  setSelectedProgram("All Programs"); // Reset program when level changes
                }}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Class/Program
              </label>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
              >
                {availablePrograms.map((prog) => (
                  <option key={prog} value={prog}>
                    {prog}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Semester
              </label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
              >
                {semesters.map((sem) => (
                  <option key={sem} value={sem}>
                    {sem}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Document List */}
        {filteredDocs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {doc.program}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {doc.semester}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-600">
                    {doc.title}
                  </h4>
                  {doc.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {doc.description}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(doc.date).toLocaleDateString()}
                  </p>
                </div>
                {doc.link && (
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"
                  >
                    {type === "attendance" ? "View Attendance" : "View Marks"}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">
              No {type === "attendance" ? "attendance records" : "internal marks"}{" "}
              found matching your filters.
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderTabContent = () => {
    if (loading) {
      return (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading...</p>
        </div>
      );
    }

    switch (activeTab) {
      case "programs":
        const undergraduatePrograms = programs.filter(
          (p) => p.level === "Undergraduate"
        );
        const postgraduatePrograms = programs.filter(
          (p) => p.level === "Postgraduate"
        );

        return (
          <div className="space-y-8">
            {undergraduatePrograms.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Undergraduate Programs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {undergraduatePrograms.map((program) => (
                    <div
                      key={program.id}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <h4 className="text-lg font-semibold text-blue-600 mb-3">
                        {program.name}
                      </h4>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">
                            {program.duration}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sanctioned Seats:</span>
                          <span className="font-medium">{program.seats}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Affiliation:</span>
                          <span className="font-medium">
                            {program.affiliation}
                          </span>
                        </div>
                      </div>
                      {program.description && (
                        <div className="mt-3 text-sm text-gray-600">
                          <p>{program.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {postgraduatePrograms.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Postgraduate Programs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {postgraduatePrograms.map((program) => (
                    <div
                      key={program.id}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <h4 className="text-lg font-semibold text-blue-600 mb-3">
                        {program.name}
                      </h4>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">
                            {program.duration}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sanctioned Seats:</span>
                          <span className="font-medium">{program.seats}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Affiliation:</span>
                          <span className="font-medium">
                            {program.affiliation}
                          </span>
                        </div>
                      </div>
                      {program.description && (
                        <div className="mt-3 text-sm text-gray-600">
                          <p>{program.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {programs.length === 0 && (
              <div className="text-center py-8">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  No programs available at the moment.
                </p>
              </div>
            )}
          </div>
        );

      case "departments":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Academic Departments
            </h3>
            {departments.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {departments.map((dept) => (
                  <div
                    key={dept.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">
                      {dept.name}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">
                          Head of Department:
                        </span>
                        <span className="font-medium">{dept.hod}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Faculty Members:</span>
                        <span className="font-medium">{dept.faculty}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Laboratories:</span>
                        <span className="font-medium">{dept.labs}</span>
                      </div>
                      {dept.description && (
                        <div className="mt-3 text-sm text-gray-600">
                          <p>{dept.description}</p>
                        </div>
                      )}
                      {dept.specializations &&
                        dept.specializations.length > 0 && (
                          <div className="mt-4">
                            <span className="text-gray-600 block mb-2">
                              Specializations:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {dept.specializations.map((spec, specIndex) => (
                                <span
                                  key={specIndex}
                                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                                >
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  No departments available at the moment.
                </p>
              </div>
            )}
          </div>
        );

      case "attendance":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Attendance Records
            </h3>
            {renderDocumentList(attendance, "attendance")}
          </div>
        );

      case "internal-marks":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Internal Marks
            </h3>
            {renderDocumentList(internalMarks, "internal-marks")}
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              Content for {activeTab} section will be available soon.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-8">
            <h1 className="text-3xl font-bold mb-2">Academics</h1>
            <p className="text-blue-100">
              Explore our academic programs, departments, and educational
              resources
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-gray-200">
            <div className="px-6">
              <div className="flex flex-wrap -mb-px">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsSection;
