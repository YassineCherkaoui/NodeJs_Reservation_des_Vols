-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2021 at 04:42 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flight_booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `airplane`
--

CREATE TABLE `airplane` (
  `id_airplane` int(200) NOT NULL,
  `Départ` varchar(200) NOT NULL,
  `Arrivé` varchar(200) NOT NULL,
  `heure_départ` time NOT NULL,
  `heure_arrivé` time NOT NULL,
  `date_départ` date NOT NULL,
  `date_arrivé` date NOT NULL,
  `num_place` int(200) NOT NULL,
  `description_vols` text NOT NULL,
  `escale` tinyint(1) NOT NULL,
  `escale_place` varchar(200) NOT NULL,
  `price` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `airplane`
--

INSERT INTO `airplane` (`id_airplane`, `Départ`, `Arrivé`, `heure_départ`, `heure_arrivé`, `date_départ`, `date_arrivé`, `num_place`, `description_vols`, `escale`, `escale_place`, `price`) VALUES
(1, 'Agadir', 'Safi', '12:56:43', '01:59:37', '2021-01-07', '2021-01-29', 212, 'AIR RYAL MAROC', 0, '', 1000),
(2, 'Maroc', 'France', '03:32:50', '14:32:50', '2021-01-13', '2021-01-16', 192, 'sdqsdqsdqs', 1, 'Indonisya', 5000),
(3, 'Maroc', 'France', '06:54:18', '15:54:18', '2021-01-07', '2021-01-16', 212, 'errterter', 0, '', 100000),
(4, 'Agadir', 'Safi', '20:27:05', '36:27:05', '2021-01-15', '2021-01-27', 15, 'zzdfsdfsd', 0, '', 500);

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id_Client` int(200) NOT NULL,
  `id_airplane` int(200) NOT NULL,
  `code` varchar(200) NOT NULL,
  `nom` varchar(200) NOT NULL,
  `prénom` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `téléphone` varchar(200) NOT NULL,
  `Passport` varchar(200) NOT NULL,
  `place_reservé` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id_payment` int(200) NOT NULL,
  `id_Client` varchar(200) NOT NULL,
  `firstname` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `state` varchar(200) NOT NULL,
  `zip` varchar(200) NOT NULL,
  `cardname` varchar(200) NOT NULL,
  `cardnumber` int(200) NOT NULL,
  `expmonth` varchar(200) NOT NULL,
  `expyear` year(4) NOT NULL,
  `cvv` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id_payment`, `id_Client`, `firstname`, `email`, `address`, `state`, `zip`, `cardname`, `cardnumber`, `expmonth`, `expyear`, `cvv`) VALUES
(1, '0', 'undefined', 'carygyji@mailinator.com', 'Minima cillum sint ', 'Eu eum rerum molesti', '49688', 'undefined', 0, '8', 1991, 0),
(2, 'undefined', 'undefined', 'xokanyzed@mailinator.com', 'Officia delectus qu', 'Ut facere dolore aut', '93317', 'undefined', 0, '7', 1977, 0),
(3, 'Veniam laborum Non', 'Nicole', 'rolele@mailinator.com', 'Aliquam voluptatem i', 'Enim est aspernatur', '29969', 'undefined', 0, '11', 2016, 0),
(4, 'Possimus quo iure t', 'Rudyard', 'teculep@mailinator.com', 'Magna est eius enim ', 'Non amet est conseq', '23770', 'undefined', 0, '1', 1976, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `airplane`
--
ALTER TABLE `airplane`
  ADD PRIMARY KEY (`id_airplane`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_Client`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id_payment`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `airplane`
--
ALTER TABLE `airplane`
  MODIFY `id_airplane` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id_Client` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=221;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id_payment` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
