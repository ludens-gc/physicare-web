/* eslint-disable no-unused-vars */
import { auth, firestore } from "../config/firebase.js";
import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import { differenceInYears } from "date-fns";

export function useUserData() {
  const [user] = useAuthState(auth);
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [address, setAddress] = useState(null);
  // const [roles, setRoles] = useState(null);

  const userDocRef = user ? doc(firestore, "users", user.uid) : null;
  const [snapshot] = useDocument(userDocRef);

  useEffect(() => {
    if (snapshot && snapshot.exists) {
      const data = snapshot.data();
      const ageYears = differenceInYears(new Date(), data.birthdate.toDate());
      setFullName(data.fullName);
      setEmail(data.email);
      setAge(ageYears);
      setGender(data.gender);
      setAddress(data.address);
      // setRoles(data.roles[0] || null);
    } else {
      setFullName(null);
      setEmail(null);
      setAge(null);
      setGender(null);
      setAddress(null);
      // setRoles(null);
    }
  }, [snapshot]);

  return {
    user,
    fullName,
    email,
    age,
    gender,
    address,
    // roles,
  };
}
