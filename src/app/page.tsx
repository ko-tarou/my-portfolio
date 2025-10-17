"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react"
import { projects, type Project } from "@/resources/projects"
import { timelineEvents, type TimelineEvent } from "@/resources/timeline"
import { skills } from "@/resources/skills"
import { reports } from "@/resources/reports"
import { content } from "@/resources/content"


export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [events, setEvents] = useState<TimelineEvent[]>(timelineEvents)

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  const toggleExpand = (index: number) => {
    setEvents(events.map((event, i) => (i === index ? { ...event, isExpanded: !event.isExpanded } : event)))
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Fixed Navigation Header */}
      <header className="fixed top-0 w-full bg-[#111827] text-white py-4 z-50 shadow-md">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:block ml-auto">
            <ul className="flex justify-end space-x-6 text-lg font-medium">
              {content.navigationItems.map((section) => (
                <li key={section} className="hover:text-indigo-400 transition-colors">
                  <button onClick={() => scrollToSection(section)}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#111827] border-t border-gray-700 py-4 px-4 animate-fadeIn">
            <ul className="flex flex-col space-y-4">
              {content.navigationItems.map((section) => (
                <li key={section} className="hover:text-indigo-400 transition-colors">
                  <button
                    onClick={() => scrollToSection(section)}
                    className="w-full text-left py-2 px-4 hover:bg-gray-800 rounded-md"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 flex flex-col items-center px-4">
        <div className="mb-8 transform transition hover:scale-105 duration-300">
          <Image
            src={content.profile.image}
            alt={content.profile.imageAlt}
            width={192}
            height={192}
            priority
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-indigo-500 shadow-2xl"
          />
        </div>

        <h1 className="text-indigo-600 text-4xl md:text-6xl font-bold drop-shadow-lg mb-6 text-center">{content.profile.name}</h1>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">{content.about.title}</h2>
          <p className="text-lg md:text-xl text-center max-w-6xl mx-auto text-gray-800 px-4 whitespace-pre-line">
            {content.about.description}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-10">{content.skills.title}</h2>
          <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-3 sm:px-4 md:px-6 py-2 bg-indigo-500 text-white text-sm md:text-lg rounded-full hover:bg-indigo-700 transition shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">{content.projects.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => openProjectDetails(project)}
                className="h-36 px-4 sm:px-6 py-4 sm:py-6 bg-white text-indigo-600 rounded-lg border-2 border-white shadow-xl 
                  hover:bg-gradient-to-r hover:from-indigo-500 hover:via-indigo-600 hover:to-indigo-800 
                  hover:text-white hover:shadow-lg hover:-translate-y-1 active:scale-95 
                  transition transform flex flex-col items-start"
              >
                <span className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">{project.title}</span>
                <span className="text-sm sm:text-base text-gray-700 hover:text-white">{project.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedProject && (
          <DialogContent className="sm:max-w-md max-w-[90vw] mx-4">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="text-xl font-bold text-indigo-600">{selectedProject.title}</DialogTitle>
              </div>
              <DialogDescription className="text-base font-medium text-gray-700 mt-1">
                {selectedProject.desc}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">詳細</h3>
                <p className="text-sm text-gray-700">{selectedProject.details}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">使用技術</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-10">{content.timeline.title}</h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline center line - hidden on mobile, visible on md and up */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-500 transform -translate-x-1/2"></div>

              {/* Timeline events */}
              {events.map((event, index) => {
                const isEven = index % 2 === 0

                return (
                  <div key={index} className="mb-8 md:mb-12 relative flex justify-center items-start">
                    {/* Year marker in center - only visible on md screens and up */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-500 border-4 border-white z-10 items-center justify-center text-xs text-white font-bold">
                      {event.year.slice(-2)}
                    </div>

                    {/* Content positioning - full width on mobile, alternating on desktop */}
                    <div
                      className={`w-full md:w-5/12 ${
                        isEven ? "md:ml-auto pl-10 md:pl-0 md:pr-8" : "md:mr-auto pl-10 md:pl-8"
                      } relative`}
                    >
                      {/* Event content */}
                      <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-indigo-600 text-white px-4 sm:px-6 py-3 flex justify-between items-center">
                          <span className="font-medium">{event.year}</span>
                          <button
                            onClick={() => toggleExpand(index)}
                            className="text-white hover:bg-indigo-800 rounded-full p-1"
                            aria-label={event.isExpanded ? "折りたたむ" : "展開する"}
                          >
                            {event.isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </button>
                        </div>

                        <div className="p-4 sm:p-6">
                          <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800">{event.title}</h3>
                          <p className="text-xs sm:text-sm mb-4 text-gray-700">{event.description}</p>

                          {event.organization && (
                            <div className="bg-indigo-500 text-white text-xs sm:text-sm rounded-md shadow-md p-2 sm:p-3 text-center mb-3">
                              {event.organization}
                            </div>
                          )}

                          {event.date && (
                            <div className="text-xs">
                              <span className="text-indigo-600 font-medium">{event.date}</span>
                            </div>
                          )}

                          {event.isExpanded && event.details && (
                            <div className="mt-4 text-xs sm:text-sm bg-gray-100 p-3 sm:p-4 rounded-md border border-gray-200">
                              {event.details}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Mobile timeline dot */}
                      <div className="absolute top-4 left-0 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white md:hidden"></div>

                      {/* Mobile year marker */}
                      <div className="absolute top-3 left-0 w-6 h-6 flex items-center justify-center md:hidden">
                        <span className="text-[10px] font-bold text-white">{event.year.slice(-2)}</span>
                      </div>
                    </div>

                    {/* Connector line to center - only visible on desktop */}
                    <div
                      className={`hidden md:block absolute top-4 h-0.5 bg-indigo-600 w-[calc(25%-4px)] ${
                        isEven ? "left-[calc(50%+4px)]" : "right-[calc(50%+4px)]"
                      }`}
                    ></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section id="reports" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">{content.reports.title}</h2>
          <div className="max-w-2xl mx-auto">
            {reports.map((report, index) => (
              <a
                key={index}
                href={report.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 underline py-2 hover:text-indigo-600 transition-colors text-xs sm:text-sm"
              >
                {report.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-8">{content.contact.title}</h2>
          <p className="text-lg mb-6 text-gray-700">{content.contact.description}</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={`mailto:${content.contact.email}`}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition shadow-md"
            >
              {content.contact.emailText}
            </a>
            <a
              href={content.contact.social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition shadow-md"
            >
              {content.contact.social.text}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>{content.footer.copyright}</p>
        </div>
      </footer>
    </main>
  )
}

