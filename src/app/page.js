"use client"
import List from "./list/page";
import React from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <List></List>
    </div>
  );
}
