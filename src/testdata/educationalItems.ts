export type EducationalItem = {
  id: string;
  title: string;
  url: string;       
  thumbnail?: string;
  channel?: string;
  topic: string;     
};

export const educationalItems: EducationalItem[] = [
  { id: "edu-001", title: "Basics of Algebra", url: "https://www.youtube.com/embed/niZ6odnkGqk", channel: "Khan Academy", topic: "Math" },
  { id: "edu-002", title: "Newton's Laws Explained", url: "https://www.youtube.com/embed/kKKM8Y-u7ds", channel: "MinutePhysics", topic: "Physics" },
  { id: "edu-003", title: "World War II in 15 Minutes", url: "https://www.youtube.com/embed/Dy1WZ9yXKjg", channel: "Simple History", topic: "History" },
  { id: "edu-004", title: "Photosynthesis Overview", url: "https://www.youtube.com/embed/sQK3Yr4Sc_k", channel: "Amoeba Sisters", topic: "Biology" },
  { id: "edu-005", title: "Introduction to HTML", url: "https://www.youtube.com/embed/qz0aGYrrlhU", channel: "Programming with Mosh", topic: "Web Dev" },
  { id: "edu-006", title: "What is Machine Learning?", url: "https://www.youtube.com/embed/GwIo3gDZCVQ", channel: "Google Developers", topic: "AI" },
  { id: "edu-007", title: "Balancing Chemical Equations", url: "https://www.youtube.com/embed/zmdxMlb88Fs", channel: "Tyler DeWitt", topic: "Chemistry" },
  { id: "edu-008", title: "The Solar System Tour", url: "https://www.youtube.com/embed/libKVRa01L8", channel: "National Geographic", topic: "Space" },
  { id: "edu-009", title: "Sorting Algorithms Visualized", url: "https://www.youtube.com/embed/ZZuD6iUe3Pc", channel: "Timo Bingmann", topic: "CS" },
  { id: "edu-010", title: "Supply and Demand Basics", url: "https://www.youtube.com/embed/g9aDizJpd_s", channel: "Jacob Clifford", topic: "Economics" },
  { id: "edu-011", title: "Grammar: Commas", url: "https://www.youtube.com/embed/zusQh6xOdpE", channel: "Grammar Girl", topic: "English" },
];
