import { FiSearch, FiClock, FiMapPin, FiDollarSign } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Sample job data with dates
const jobsData = [
//   {
//     id: 1,
//     title: "Web Designer / Developer",
//     type: "Full Time",
//     posted: "2025-03-01",
//     location: "India",
//     salary: "₹40000 - ₹60000/mo",
//   },
//   {
//     id: 2,
//     title: "Application Developer",
//     type: "Remote",
//     posted: "2025-03-05",
//     location: "India",
//     salary: "₹40000 - ₹60000/mo",
//   },
//   {
//     id: 3,
//     title: "Marketing Director",
//     type: "Part Time",
//     posted: "2025-03-10",
//     location: "India",
//     salary: "₹50000 - ₹70000/mo",
//   },
];

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("All");

  // Function to calculate time ago
  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1)
      return `${interval} year${interval === 1 ? "" : "s"} ago`;

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1)
      return `${interval} month${interval === 1 ? "" : "s"} ago`;

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return `${interval} day${interval === 1 ? "" : "s"} ago`;

    interval = Math.floor(seconds / 3600);
    if (interval >= 1)
      return `${interval} hour${interval === 1 ? "" : "s"} ago`;

    interval = Math.floor(seconds / 60);
    if (interval >= 1)
      return `${interval} minute${interval === 1 ? "" : "s"} ago`;

    return `${Math.floor(seconds)} second${seconds === 1 ? "" : "s"} ago`;
  };

  // Initialize and sort jobs by date
  useEffect(() => {
    const sortedJobs = [...jobsData].sort(
      (a, b) => new Date(b.posted) - new Date(a.posted)
    );
    setJobs(sortedJobs);
    setFilteredJobs(sortedJobs);
  }, []);

  // Filter jobs based on search term and job type
  useEffect(() => {
    let results = jobs;

    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by job type
    if (jobType !== "All") {
      results = results.filter((job) => job.type === jobType);
    }

    setFilteredJobs(results);
  }, [searchTerm, jobType, jobs]);

  return (
    <div className="bg-white dark:bg-darkblack">
      <div className="wrapper pt-[7rem] paddingbottom">
        <h2 className="main-title text-center">Careers</h2>
        <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-[#1c1c1c] rounded-lg shadow-md mt-4">
          {/* Search Section */}
          <div className="mb-8">
            <h1 className="text-2xl text-black dark:text-white mb-4">
              Search your keywords
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-3 text-black dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none appearance-none bg-white"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="All">All Job Types</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
              <button className="primary-btn">SEARCH</button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-medium text-black dark:text-white">
                        {job.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-black dark:text-gray-300">
                        <div className="flex items-center">
                          <FaRegBuilding className="mr-2" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center">
                          <FiClock className="mr-2" />
                          <span>{getTimeAgo(job.posted)}</span>
                        </div>
                        <div className="flex items-center">
                          <FiMapPin className="mr-2" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <FiDollarSign className="mr-2" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <Link to="/contact-us" className="primary-btn">
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-xl font-medium text-black dark:text-white mb-4">
                  {jobs.length > 0
                    ? "No jobs match your search criteria"
                    : "There are no current openings"}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Follow our company social handles for updates on new
                  opportunities
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
