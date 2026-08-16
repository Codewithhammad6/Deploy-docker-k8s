/**
 * Class-wise Section Configuration
 * Sections: 6-8: ['Iqbal', 'Quaid', 'Liaqat']
 *         9-10: ['Iqbal', 'Liaqat', 'Tariq', 'Excellent']
 */

const SECTIONS_CONFIG = {
  // Classes 6-8
  '6': ['Iqbal', 'Quaid', 'Liaqat'],
  '7': ['Iqbal', 'Quaid', 'Liaqat'],
  '8': ['Iqbal', 'Quaid', 'Liaqat'],
  
  // Classes 9-10  
  '9': ['Iqbal', 'Liaqat', 'Tariq', 'Excellent'],
  '10': ['Iqbal', 'Liaqat', 'Tariq', 'Excellent']
};

/**
 * Get sections for a specific class
 * @param {string} className - Class number (6-10)
 * @returns {string[]} Array of section names
 */
export const getSectionsByClass = (className) => {
  return SECTIONS_CONFIG[className] || [];
};

/**
 * Check if class/section combination is valid
 * @param {string} className 
 * @param {string} section 
 * @returns {boolean}
 */
export const isValidClassSection = (className, section) => {
  return getSectionsByClass(className).includes(section);
};

/**
 * Get all unique sections across all classes
 */
export const getAllSections = () => {
  return Array.from(new Set(Object.values(SECTIONS_CONFIG).flat()));
};

// Export config for direct access (if needed)
export default SECTIONS_CONFIG;

