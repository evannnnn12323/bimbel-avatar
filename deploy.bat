@echo off
title Deploy Bimbel Avatar ke GitHub
cls
echo =======================================================
echo         DEPLOMENT OTOMATIS BIMBEL AVATAR
echo =======================================================
echo.
echo Skrip ini akan membantu Anda membuat repositori di GitHub
echo dan mengunggah kode Bimbel Avatar secara otomatis.
echo.

:: Ambil Input Username dan Token
set /p USERNAME="Masukkan Username GitHub Anda: "
set /p TOKEN="Masukkan Personal Access Token (PAT) GitHub Anda: "
echo.

if "%USERNAME%"=="" goto error_input
if "%TOKEN%"=="" goto error_input

echo [1/4] Membuat repositori 'bimbel-avatar' di GitHub via API...
curl -H "Authorization: token %TOKEN%" -H "Content-Type: application/json" -d "{\"name\":\"bimbel-avatar\",\"private\":false,\"has_issues\":true,\"has_projects\":true,\"has_wiki\":true}" https://api.github.com/user/repos > temp_api_res.json

:: Cek apakah curl sukses
findstr /i "id" temp_api_res.json >nul
if errorlevel 1 (
    echo.
    echo Gagal membuat repositori. Silakan periksa Token Anda.
    echo Pastikan Token memiliki izin 'repo'.
    del temp_api_res.json
    pause
    exit /b
)
del temp_api_res.json
echo Repositori berhasil dibuat di GitHub!
echo.

echo [2/4] Mengatur remote Git lokal...
git remote remove origin 2>nul
git remote add origin https://%USERNAME%:%TOKEN%@github.com/%USERNAME%/bimbel-avatar.git
echo Remote Git telah dikonfigurasi.
echo.

echo [3/4] Menolak perubahan ke cabang main dan mengunggah berkas...
git branch -M main 2>nul
git push -u origin main
if errorlevel 1 (
    echo.
    echo Gagal mengunggah kode ke GitHub.
    pause
    exit /b
)
echo.
echo [4/4] BERHASIL! Kode Bimbel Avatar telah diunggah.
echo.
echo Tautan Repositori Anda: https://github.com/%USERNAME%/bimbel-avatar
echo.
echo =======================================================
echo            LANGKAH PENTING BERIKUTNYA:
echo =======================================================
echo 1. Buka tautan repositori di atas pada browser.
echo 2. Masuk ke menu 'Settings' -> 'Pages'.
echo 3. Di bagian 'Branch', pilih 'main' dan '/ (root)', lalu klik 'Save'.
echo 4. Website Bimbel Avatar Anda akan aktif dalam 1-2 menit pada:
echo    https://%USERNAME%.github.io/bimbel-avatar/
echo =======================================================
echo.
pause
exit /b

:error_input
echo.
echo Error: Username dan Token tidak boleh kosong.
pause
exit /b
