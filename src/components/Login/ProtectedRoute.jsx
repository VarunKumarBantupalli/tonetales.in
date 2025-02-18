import { useEffect, useState } from "react";
import { auth, db } from "../../authentication/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkRole = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setRole(userDoc.data().role);
        }
      }
      setLoading(false);
    };

    checkRole();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!role || role !== requiredRole) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
