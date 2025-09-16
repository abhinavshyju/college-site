import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Calendar,
  Users,
  Library,
  Award,
  ExternalLink,
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

const AcademicsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("programs");
  const [programs, setPrograms] = useState<Program[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  const tabs = [
    { id: "programs", label: "Academic Programs" },
    { id: "departments", label: "Departments" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [programsResponse, departmentsResponse] = await Promise.all([
          fetch("/api/admin/academics/programs"),
          fetch("/api/admin/academics/departments"),
        ]);

        if (programsResponse.ok) {
          const programsData = await programsResponse.json();
          setPrograms(programsData);
        }

        if (departmentsResponse.ok) {
          const departmentsData = await departmentsResponse.json();
          setDepartments(departmentsData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
                    className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
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
