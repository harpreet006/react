-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2020 at 06:49 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_catering`
--

-- --------------------------------------------------------

--
-- Table structure for table `book_bio`
--

CREATE TABLE `book_bio` (
  `id` int(11) NOT NULL,
  `u_id` int(11) NOT NULL,
  `b_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_bio`
--

INSERT INTO `book_bio` (`id`, `u_id`, `b_id`) VALUES
(1, 36, 1),
(2, 36, 2);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `service_name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service_name`, `user_id`, `city`, `price`, `status`, `created_at`, `updated_at`) VALUES
(1, 'helo', 27, 'chandigarh', 4545, 0, '2020-02-07 19:37:37', '2020-02-07 19:37:37'),
(2, 'helo4', 27, 'chandigarh', 45450, 0, '2020-02-07 19:38:26', '2020-02-07 19:38:26'),
(3, 'helo4', 27, 'chandigarh', 4545, 0, '2020-02-07 19:38:40', '2020-02-07 19:38:40'),
(4, 'helo', 27, 'chandigarh', 4545, 0, '2020-02-07 19:38:40', '2020-02-07 19:38:40'),
(5, '44', 27, 'punchkula', 44, 0, '2020-02-07 19:39:09', '2020-02-07 19:39:09'),
(6, 'hjj', 31, 'mohali', 45, 0, '2020-02-08 04:53:24', '2020-02-08 04:53:24'),
(7, 'dsd', 32, 'mohali', 4545, 0, '2020-02-08 05:52:56', '2020-02-08 05:52:56'),
(8, 'hjjj', 33, 'punchkula', 455, 0, '2020-02-08 06:50:42', '2020-02-08 06:50:42');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('01uOxC-y4SQfUY69XkUWDtLmUfBcvGK7', 1581399665, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLoggedIn\":true,\"user\":{\"id\":1,\"name\":\"admin\",\"email\":\"admin@admin.com\",\"password\":\"$2a$08$QWRosZWHHUU62ftA1vZp1.FbEE4tckZLu5ckpkLVEupBYm4sjBM9u\",\"type\":\"admin\",\"created_at\":\"2020-01-30T14:25:31.000Z\",\"updated_at\":\"2020-01-30T14:25:31.000Z\"}}'),
('5XY-sTHg8VAjvKxPRsYlg7GZ3IEc5j_m', 1581396781, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLoggedIn\":true,\"user\":{\"id\":36,\"name\":\"jkk\",\"email\":\"jkk@gmail.com\",\"password\":\"$2a$08$DfOj6mkpf3e3FGsVHeJ88ucCTyh0dRCVI3pVq0EHlAycObPEtsv3G\",\"type\":\"service_provider\",\"created_at\":\"2020-02-10T04:53:01.000Z\",\"updated_at\":\"2020-02-10T04:53:01.000Z\"}}'),
('6nbavylScTtaQEHJWEft3vFqbpjRJd4c', 1581316234, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLoggedIn\":true,\"user\":{\"id\":35,\"name\":\"test\",\"email\":\"test@gmail.com\",\"password\":\"$2a$08$SvPZ.yjTcFndM393YT3zn.6bHraGxMB32kdc8sdtbP3b0MYpvqFGS\",\"type\":\"service_provider\",\"created_at\":\"2020-02-09T06:30:28.000Z\",\"updated_at\":\"2020-02-09T06:30:28.000Z\"}}'),
('T-RNoB4NUy7r1JLQCx5BUOfh9wGJ-ya5', 1581399503, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLoggedIn\":true,\"user\":{\"id\":36,\"name\":\"jkk\",\"email\":\"jkk@gmail.com\",\"password\":\"$2a$08$DfOj6mkpf3e3FGsVHeJ88ucCTyh0dRCVI3pVq0EHlAycObPEtsv3G\",\"type\":\"service_provider\",\"created_at\":\"2020-02-10T04:53:01.000Z\",\"updated_at\":\"2020-02-10T04:53:01.000Z\"}}'),
('XgdUxa_g_qu8oEKBBOtsf50HJvKIapnv', 1581398056, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLoggedIn\":true,\"user\":{\"id\":36,\"name\":\"jkk\",\"email\":\"jkk@gmail.com\",\"password\":\"$2a$08$DfOj6mkpf3e3FGsVHeJ88ucCTyh0dRCVI3pVq0EHlAycObPEtsv3G\",\"type\":\"service_provider\",\"created_at\":\"2020-02-10T04:53:01.000Z\",\"updated_at\":\"2020-02-10T04:53:01.000Z\"}}'),
('Xwkif52gfMMKcqsEZUNsygpVmztgdj9F', 1581316228, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLoggedIn\":true,\"user\":{\"id\":35,\"name\":\"test\",\"email\":\"test@gmail.com\",\"password\":\"$2a$08$SvPZ.yjTcFndM393YT3zn.6bHraGxMB32kdc8sdtbP3b0MYpvqFGS\",\"type\":\"service_provider\",\"created_at\":\"2020-02-09T06:30:28.000Z\",\"updated_at\":\"2020-02-09T06:30:28.000Z\"}}'),
('fiHgqBE9F3Ez7Ah-ilcbp12cZbqd-lDt', 1581398257, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLoggedIn\":true,\"user\":{\"id\":36,\"name\":\"jkk\",\"email\":\"jkk@gmail.com\",\"password\":\"$2a$08$DfOj6mkpf3e3FGsVHeJ88ucCTyh0dRCVI3pVq0EHlAycObPEtsv3G\",\"type\":\"service_provider\",\"created_at\":\"2020-02-10T04:53:01.000Z\",\"updated_at\":\"2020-02-10T04:53:01.000Z\"}}'),
('jSRAYAphp3l9aEe-L72NzK9lNqAAq6j4', 1581398830, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLoggedIn\":true,\"user\":{\"id\":36,\"name\":\"jkk\",\"email\":\"jkk@gmail.com\",\"password\":\"$2a$08$DfOj6mkpf3e3FGsVHeJ88ucCTyh0dRCVI3pVq0EHlAycObPEtsv3G\",\"type\":\"service_provider\",\"created_at\":\"2020-02-10T04:53:01.000Z\",\"updated_at\":\"2020-02-10T04:53:01.000Z\"}}'),
('qz6pO1LmGPnwev-ftt4SOwwn44Z8v6Ma', 1581399299, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLoggedIn\":true,\"user\":{\"id\":36,\"name\":\"jkk\",\"email\":\"jkk@gmail.com\",\"password\":\"$2a$08$DfOj6mkpf3e3FGsVHeJ88ucCTyh0dRCVI3pVq0EHlAycObPEtsv3G\",\"type\":\"service_provider\",\"created_at\":\"2020-02-10T04:53:01.000Z\",\"updated_at\":\"2020-02-10T04:53:01.000Z\"}}'),
('z8uwJyDBxiVHzD2IjdlEf9lBcAFzVrP8', 1581396789, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLoggedIn\":true,\"user\":{\"id\":36,\"name\":\"jkk\",\"email\":\"jkk@gmail.com\",\"password\":\"$2a$08$DfOj6mkpf3e3FGsVHeJ88ucCTyh0dRCVI3pVq0EHlAycObPEtsv3G\",\"type\":\"service_provider\",\"created_at\":\"2020-02-10T04:53:01.000Z\",\"updated_at\":\"2020-02-10T04:53:01.000Z\"}}');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` enum('admin','service_provider','customer','') NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `type`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@admin.com', '$2a$08$QWRosZWHHUU62ftA1vZp1.FbEE4tckZLu5ckpkLVEupBYm4sjBM9u', 'admin', '2020-01-30 14:25:31', '2020-01-30 14:25:31'),
(34, 'hjjj', 'jkjkj@gmail.com', '$2a$08$3VfmDOeXxl9iCaB7gxc1We.ifycnLkjf6KlgESbK13Zq81kY5ZxwW', 'service_provider', '2020-02-08 06:52:14', '2020-02-08 06:52:14'),
(35, 'test', 'test@gmail.com', '$2a$08$SvPZ.yjTcFndM393YT3zn.6bHraGxMB32kdc8sdtbP3b0MYpvqFGS', 'service_provider', '2020-02-09 06:30:28', '2020-02-09 06:30:28'),
(36, 'jkk', 'jkk@gmail.com', '$2a$08$DfOj6mkpf3e3FGsVHeJ88ucCTyh0dRCVI3pVq0EHlAycObPEtsv3G', 'service_provider', '2020-02-10 04:53:01', '2020-02-10 04:53:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book_bio`
--
ALTER TABLE `book_bio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book_bio`
--
ALTER TABLE `book_bio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
