import React from "react";

export default function RutaProtegida({ children, roles = ["operario"] }) {
  const session = JSON.parse(localStorage.getItem("aiden_session") || "null");
  const role = session?.role?.toLowerCase();
  if (!session || !roles.includes(role)) {
    window.location.href = "/login";
    return null;
  }
  return children;
}
