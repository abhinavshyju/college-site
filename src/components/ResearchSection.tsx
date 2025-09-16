import React, { useState } from 'react';
import { Lightbulb, Building2, FileText, Users, Award, ExternalLink } from 'lucide-react';

const ResearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('incubation');

  const tabs = [
    { id: 'incubation', label: 'Incubation/Startups' },
    { id: 'consultancy', label: 'Consultancy & Industry Tie-ups' },
    { id: 'publications', label: 'Publications & Conferences' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'incubation':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Innovation & Incubation Center</h3>
                <p className="text-gray-600 mb-6">
                  Our Innovation and Incubation Center fosters entrepreneurial spirit among students 
                  and faculty, providing the necessary support and resources to transform innovative 
                  ideas into successful startups.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Facilities Provided</h4>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• Co-working spaces and meeting rooms</li>
                      <li>• Mentorship from industry experts</li>
                      <li>• Seed funding opportunities</li>
                      <li>• Technical infrastructure and labs</li>
                      <li>• Legal and financial advisory services</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Success Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-800">15+</div>
                        <div className="text-green-700 text-sm">Startups Incubated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-800">₹2.5Cr</div>
                        <div className="text-green-700 text-sm">Funding Raised</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Featured Startups</h4>
                <div className="space-y-4">
                  {[
                    {
                      name: 'TechSolutions Pro',
                      sector: 'Software Development',
                      founder: 'Arjun Nair (CSE 2020)',
                      description: 'AI-powered business automation solutions',
                      status: 'Series A Funded'
                    },
                    {
                      name: 'EcoTech Innovations',
                      sector: 'Clean Technology',
                      founder: 'Priya Menon (Electronics 2019)',
                      description: 'Sustainable energy monitoring systems',
                      status: 'Seed Funded'
                    },
                    {
                      name: 'DataViz Analytics',
                      sector: 'Data Science',
                      founder: 'Rahul Kumar (MSc CS 2021)',
                      description: 'Advanced data visualization platform',
                      status: 'Bootstrapped'
                    }
                  ].map((startup, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-gray-900">{startup.name}</h5>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {startup.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{startup.description}</p>
                      <div className="text-xs text-gray-500">
                        <span className="font-medium">Sector:</span> {startup.sector} | 
                        <span className="font-medium"> Founder:</span> {startup.founder}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'consultancy':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry Partnerships</h3>
                <p className="text-gray-600 mb-6">
                  Our college maintains strong relationships with leading industries, providing 
                  consultancy services and collaborative research opportunities that benefit 
                  both academia and industry.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      company: 'Infosys Technologies',
                      type: 'Software Consultancy',
                      projects: 8,
                      duration: '2019-2024'
                    },
                    {
                      company: 'BSNL Kerala',
                      type: 'Telecommunications',
                      projects: 5,
                      duration: '2020-2024'
                    },
                    {
                      company: 'Kerala State Electronics',
                      type: 'Electronics Design',
                      projects: 12,
                      duration: '2018-2024'
                    },
                    {
                      company: 'TCS Innovation Labs',
                      type: 'Research Collaboration',
                      projects: 6,
                      duration: '2021-2024'
                    }
                  ].map((partner, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{partner.company}</h4>
                        <Building2 className="h-5 w-5 text-blue-600" />
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{partner.type}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{partner.projects} Projects</span>
                        <span>{partner.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Consultancy Services</h4>
                <div className="space-y-3">
                  {[
                    'Software Development & Testing',
                    'Electronics Circuit Design',
                    'Data Analytics & Visualization',
                    'Technical Training Programs',
                    'Research & Development',
                    'Quality Assurance Services'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <Award className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">Contact for Consultancy</h5>
                  <p className="text-blue-800 text-sm mb-2">
                    For industry partnerships and consultancy services:
                  </p>
                  <p className="text-blue-700 text-sm">
                    📧 consultancy@casthamarassery.ac.in<br/>
                    📞 +91-495-2244575
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'publications':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Publications & Conferences</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Recent Publications (2024)</h4>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Machine Learning Applications in Sustainable Agriculture',
                      authors: 'Dr. Priya Nair, Prof. Ravi Kumar',
                      journal: 'Journal of Applied Computer Science',
                      impact: 'Q1, IF: 3.2'
                    },
                    {
                      title: 'VLSI Design Optimization Using Genetic Algorithms',
                      authors: 'Dr. Suresh Menon, Dr. Anjali Sharma',
                      journal: 'IEEE Transactions on VLSI Systems',
                      impact: 'Q1, IF: 2.8'
                    },
                    {
                      title: 'Mathematical Modeling of COVID-19 Spread Patterns',
                      authors: 'Dr. Anjali Sharma, Research Team',
                      journal: 'Applied Mathematics Letters',
                      impact: 'Q2, IF: 2.4'
                    }
                  ].map((pub, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h5 className="font-semibold text-gray-900 mb-2">{pub.title}</h5>
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">Authors:</span> {pub.authors}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Published in:</span> {pub.journal}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          {pub.impact}
                        </span>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                          View Paper <ExternalLink className="h-3 w-3 ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Conferences & Events</h4>
                <div className="space-y-4">
                  {[
                    {
                      event: 'National Conference on Applied Sciences (NCAS 2024)',
                      date: 'March 15-17, 2024',
                      type: 'Organized',
                      participants: '200+ Participants'
                    },
                    {
                      event: 'IEEE International Conference on Electronics',
                      date: 'January 22-24, 2024',
                      type: 'Participated',
                      participants: '5 Papers Presented'
                    },
                    {
                      event: 'Kerala Science Congress 2024',
                      date: 'February 8-10, 2024',
                      type: 'Participated',
                      participants: '8 Papers Presented'
                    }
                  ].map((conf, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-gray-900">{conf.event}</h5>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          conf.type === 'Organized' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {conf.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{conf.date}</p>
                      <p className="text-sm text-gray-500">{conf.participants}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-orange-900 mb-2">Publication Statistics</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-800">85+</div>
                      <div className="text-orange-700 text-sm">Total Publications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-800">25+</div>
                      <div className="text-orange-700 text-sm">Conferences Attended</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <Lightbulb className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Content for {activeTab} section will be available soon.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-8">
            <h1 className="text-3xl font-bold mb-2">Research</h1>
            <p className="text-blue-100">
              Discover our research initiatives, industry partnerships, and innovation programs
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
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;