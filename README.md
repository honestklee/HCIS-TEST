# Mandiri HCIS - Human Capital Information System

## Overview

Mandiri HCIS adalah aplikasi web berbasis **Next.js** untuk mengelola sistem informasi sumber daya manusia (Human Capital Information System) yang dirancang khusus untuk Bank Mandiri. Aplikasi ini menyediakan antarmuka modern untuk mengelola data karyawan, penggajian, laporan, dan administrasi HR lainnya.

**Status Saat Ini**: Frontend-only dengan mock data dan autentikasi sederhana.

## 🚀 Fitur Utama

### 📊 Dashboard Komprehensif
- Overview statistik payroll (Total Payroll, Active Employees, Overtime Hours, Tax & BPJS Compliance)
- Grafik tren payroll 6 bulan terakhir
- Distribusi kehadiran karyawan
- Activity feed real-time
- Recent payroll batches table

### 👤 Manajemen Karyawan
- Master data karyawan dengan informasi lengkap
- Profil karyawan dengan avatar dan detail departemen
- Status karyawan (Active/Inactive)
- Grading system

### 💰 Payroll Processing
- Pengolahan payroll batch
- Tracking status payroll (Draft, Processing, Completed)
- Integrasi dengan sistem bank untuk disbursement

### 📈 Laporan & Analytics
- Monthly Payroll Summary
- Overtime Analysis Report
- Bonus & Incentives Audit
- Tax Compliance Report
- BPJS Contributions Report
- Employee Attendance Summary

### 🔐 Sistem Autentikasi
- Login dengan enterprise credentials
- Session management dengan JWT tokens
- Protected routes dengan middleware
- Logout dengan clearance data lengkap

## 🛠️ Teknologi Stack

### Frontend
- **Next.js 16** - React framework dengan App Router
- **React 19** - UI library
- **TailwindCSS** - Utility-first CSS framework
- **Ant Design** - Component library dengan icons
- **Lucide React** - Icon library tambahan

### Backend (Mock)
- **Next.js API Routes** - Server-side rendering dan API endpoints
- **TypeScript** - Type safety
- **JWT (jose)** - Session management
- **Zod** - Schema validation
- Python (Coming Soon if needed to continue)

### Development Tools
- **PostCSS** - CSS processing
- **ESLint** - Code linting

# HCIS-TEST
