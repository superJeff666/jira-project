import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import { EpicScreen } from "../epic";
import { KanbanScreen } from "../Kanban";

export const ProjectScreen = () => {
  return (
    <div>
      <h1>Project Screen</h1>
      <Link to={"kanban"}>看板</Link>
      <Link to={"epic"}>任务组</Link>
      <Routes>
        <Route path={"/kanban"} element={<KanbanScreen />} />
        <Route path={"/epic"} element={<EpicScreen />} />
        <Route
          path="*"
          element={
            <Navigate to={window.location.pathname + "/kanban"} replace />
          }
        />
      </Routes>
    </div>
  );
};
