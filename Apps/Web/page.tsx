"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#FFFFFF"
    }}>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: 48, fontWeight: 700 }}
      >
        EVIC Web3 Platform
      </motion.h1>

      <p style={{ color: "#B89B73" }}>
        Branco • Preto • Bege Architecture
      </p>

      <div style={{ marginTop: 30 }}>
        <ConnectButton />
      </div>

      <div style={{
        marginTop: 40,
        padding: 20,
        border: "1px solid #E8DCC8",
        borderRadius: 12
      }}>
        Secure Web3 Infrastructure
      </div>

    </main>
  );
}

