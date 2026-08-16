import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [activeStudentId, setActiveStudentId] = useState('STU1001');
  const [selectedRole, setSelectedRole] = useState('student'); // 'student', 'teacher', 'admin'

  return (
    <UserContext.Provider value={{ activeStudentId, setActiveStudentId, selectedRole, setSelectedRole }}>
      {children}
    </UserContext.Provider>
  );
};
