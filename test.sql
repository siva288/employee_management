-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2021 at 08:21 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `test`;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(255) NOT NULL,
  `name` char(15) NOT NULL,
  `address` char(25) NOT NULL,
  `designation` char(40) NOT NULL,
  `salary` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `name`, `address`, `designation`, `salary`) VALUES
(1, 'siva', 'Rameswaram', 'Full Stack Web Developer', '12000'),
(2, 'selva', 'Ramanathapuram', 'Front End Developer', '13000'),
(3, 'Jeba', 'Mathurai', 'Back End Developer', '15000'),
(4, 'Mark', 'Chennai', 'Database Administration', '20000'),
(5, 'Jeevan', 'Chennai', 'HR', '50000');

-- --------------------------------------------------------

--
-- Table structure for table `employeeprofile`
--

CREATE TABLE `employeeprofile` (
  `id` int(255) NOT NULL,
  `profileimage` char(100) DEFAULT 'defaultimage.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employeeprofile`
--

INSERT INTO `employeeprofile` (`id`, `profileimage`) VALUES
(1, '1628317076064-OIP (1).jfif'),
(2, '1628317109753-OIP (5).jfif'),
(3, '1628317149506-OIP (2).jfif'),
(4, 'default.png'),
(5, 'default.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employeeprofile`
--
ALTER TABLE `employeeprofile`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `employeeprofile`
--
ALTER TABLE `employeeprofile`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
