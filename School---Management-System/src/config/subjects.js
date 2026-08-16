/**
 * Class-wise Subject Configuration
 * 6-8: English, Urdu, Math, Science, History, Arabic, Tarjama-tul-Quran, Islamiat, Drawing
 * 9-10: English, Urdu, Physics, Chemistry, Biology, Math, Computer, Islamiat, Pak Studies
 */

const SUBJECTS_CONFIG = {
  // Classes 6-8 Subjects
  low: [  // 6,7,8
    'English',
    'Urdu', 
    'Math',
    'Science',
    'History',
    'Arabic',
    'Tarjama-tul-Quran',
    'Islamiat',
    'Drawing'
  ],
  
  // Classes 9-10 Subjects
  high: [ // 9,10
    'English',
    'Urdu',
    'Physics', 
    'Chemistry',
    'Biology',
    'Math',
    'Computer',
    'Islamiat',
    'Pak Studies'
  ]
};

/**
 * Get subjects for a specific class
 * @param {string} className - Class number (6-10)
 * @returns {string[]} Array of subject names
 */
export const getSubjectsByClass = (className) => {
  const num = parseInt(className);
  return num >= 6 && num <= 8 ? SUBJECTS_CONFIG.low : SUBJECTS_CONFIG.high;
};

/**
 * Check if class/subject combination is valid
 * @param {string} className 
 * @param {string} subject 
 * @returns {boolean}
 */
export const isValidClassSubject = (className, subject) => {
  return getSubjectsByClass(className).includes(subject);
};

/**
 * Get all unique subjects
 */
export const getAllSubjects = () => {
  return Array.from(new Set([...SUBJECTS_CONFIG.low, ...SUBJECTS_CONFIG.high]));
};

// Export config for direct access
export default SUBJECTS_CONFIG;

