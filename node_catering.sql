-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 11, 2020 at 04:48 PM
-- Server version: 5.7.29-0ubuntu0.16.04.1
-- PHP Version: 7.2.18-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
(1, 37, 1),
(2, 37, 2),
(3, 37, 7),
(5, 37, 4),
(6, 37, 3);

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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service_name`, `user_id`, `city`, `price`, `status`, `created_at`, `updated_at`) VALUES
(1, 'helo', 27, 'chandigarh', 4545, 1, '2020-02-07 19:37:37', '2020-02-07 19:37:37'),
(2, 'helo4', 27, 'chandigarh', 45450, 1, '2020-02-07 19:38:26', '2020-02-07 19:38:26'),
(3, 'helo4', 27, 'chandigarh', 4545, 1, '2020-02-07 19:38:40', '2020-02-07 19:38:40'),
(4, 'helo', 27, 'chandigarh', 4545, 0, '2020-02-07 19:38:40', '2020-02-07 19:38:40'),
(5, '44', 27, 'punchkula', 44, 0, '2020-02-07 19:39:09', '2020-02-07 19:39:09'),
(6, 'hjj', 31, 'mohali', 45, 0, '2020-02-08 04:53:24', '2020-02-08 04:53:24'),
(7, 'dsd', 32, 'mohali', 4545, 0, '2020-02-08 05:52:56', '2020-02-08 05:52:56'),
(8, 'hjjj', 33, 'punchkula', 455, 0, '2020-02-08 06:50:42', '2020-02-08 06:50:42'),
(9, 'sfsd', 35, 'punchkula', 8966, 0, '2020-02-11 05:12:00', '2020-02-11 05:12:00'),
(10, 'oppp', 35, 'mohali', 752, 0, '2020-02-11 05:12:24', '2020-02-11 05:12:24'),
(11, 'sfsd', 35, 'punchkula', 8966, 0, '2020-02-11 05:35:09', '2020-02-11 05:35:09');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('-YnidDEgkfxjarfwwMESOd8teOlBrWhu', 1581490610, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":37,"name":"re","email":"re1@gmail.com","password":"$2a$08$iIqocuVAjt4m0zbt2gs9r.J8T7V/VGY.9xbO.Qzbg99IS0U6vFmem","type":"customer","created_at":"2020-02-11T05:42:38.000Z","updated_at":"2020-02-11T05:42:38.000Z"}}'),
('0XlVle90XuErcUXDQkaiqKwgyC3qWtC6', 1581486159, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":37,"name":"re","email":"re1@gmail.com","password":"$2a$08$iIqocuVAjt4m0zbt2gs9r.J8T7V/VGY.9xbO.Qzbg99IS0U6vFmem","type":"customer","created_at":"2020-02-11T05:42:38.000Z","updated_at":"2020-02-11T05:42:38.000Z"}}'),
('2tOSAkEb7gJP2TtmC_BFle4QoS2c7kWC', 1581505368, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":38,"name":"hj01","email":"hj01@gmail.com","password":"$2a$08$Oih61b.8Jw6dnQ/tsAAhvebH9548COu6G6rH5TVa5RffDTHuCb40y","type":"service_provider","created_at":"2020-02-11T11:02:47.000Z","updated_at":"2020-02-11T11:02:47.000Z"}}'),
('7n6ZcO7IHoq3Yj-fGcdLef3rNwdi7o-T', 1581484312, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":35,"name":"test","email":"test@gmail.com","password":"$2a$08$SvPZ.yjTcFndM393YT3zn.6bHraGxMB32kdc8sdtbP3b0MYpvqFGS","type":"service_provider","created_at":"2020-02-09T06:30:28.000Z","updated_at":"2020-02-09T06:30:28.000Z"}}'),
('8Sb4NCQup8FuSkQNhhf6aHLDMbU-Fp_I', 1581500955, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":37,"name":"re","email":"re1@gmail.com","password":"$2a$08$iIqocuVAjt4m0zbt2gs9r.J8T7V/VGY.9xbO.Qzbg99IS0U6vFmem","type":"customer","created_at":"2020-02-11T05:42:38.000Z","updated_at":"2020-02-11T05:42:38.000Z"}}'),
('9NgAT9FwAU5TZAUFPt7iLlc3Vh8LrwG8', 1581481853, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":35,"name":"test","email":"test@gmail.com","password":"$2a$08$SvPZ.yjTcFndM393YT3zn.6bHraGxMB32kdc8sdtbP3b0MYpvqFGS","type":"service_provider","created_at":"2020-02-09T06:30:28.000Z","updated_at":"2020-02-09T06:30:28.000Z"}}'),
('B4qxWGGmssIhmCEpLEdg4iTPFTUX2dhn', 1581487545, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":37,"name":"re","email":"re1@gmail.com","password":"$2a$08$iIqocuVAjt4m0zbt2gs9r.J8T7V/VGY.9xbO.Qzbg99IS0U6vFmem","type":"customer","created_at":"2020-02-11T05:42:38.000Z","updated_at":"2020-02-11T05:42:38.000Z"}}'),
('DBznHthoRtryTNtPoH9gpHfwPQ_bbrEX', 1581481847, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":35,"name":"test","email":"test@gmail.com","password":"$2a$08$SvPZ.yjTcFndM393YT3zn.6bHraGxMB32kdc8sdtbP3b0MYpvqFGS","type":"service_provider","created_at":"2020-02-09T06:30:28.000Z","updated_at":"2020-02-09T06:30:28.000Z"}}'),
('GRP4qbHNftFC-xl_P8XvtuxPui23aBNY', 1581491617, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":37,"name":"re","email":"re1@gmail.com","password":"$2a$08$iIqocuVAjt4m0zbt2gs9r.J8T7V/VGY.9xbO.Qzbg99IS0U6vFmem","type":"customer","created_at":"2020-02-11T05:42:38.000Z","updated_at":"2020-02-11T05:42:38.000Z"}}'),
('IQtpe9apnByDmbdsSsloMtrCVrFg8jLi', 1581484930, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":1,"name":"admin","email":"admin@admin.com","password":"$2a$08$QWRosZWHHUU62ftA1vZp1.FbEE4tckZLu5ckpkLVEupBYm4sjBM9u","type":"admin","created_at":"2020-01-30T14:25:31.000Z","updated_at":"2020-01-30T14:25:31.000Z"}}'),
('JHO1R-r7rID6x3d6EdJUohNV1swLt3U2', 1581483718, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":35,"name":"test","email":"test@gmail.com","password":"$2a$08$SvPZ.yjTcFndM393YT3zn.6bHraGxMB32kdc8sdtbP3b0MYpvqFGS","type":"service_provider","created_at":"2020-02-09T06:30:28.000Z","updated_at":"2020-02-09T06:30:28.000Z"}}'),
('J_ZdGrGSZIU3a6WJLFfYDNQ4rMLVTfXD', 1581482782, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":35,"name":"test","email":"test@gmail.com","password":"$2a$08$SvPZ.yjTcFndM393YT3zn.6bHraGxMB32kdc8sdtbP3b0MYpvqFGS","type":"service_provider","created_at":"2020-02-09T06:30:28.000Z","updated_at":"2020-02-09T06:30:28.000Z"}}'),
('OTzjEG2LXiNGutxDsJhzk5zvtSiDf91g', 1581491347, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":37,"name":"re","email":"re1@gmail.com","password":"$2a$08$iIqocuVAjt4m0zbt2gs9r.J8T7V/VGY.9xbO.Qzbg99IS0U6vFmem","type":"customer","created_at":"2020-02-11T05:42:38.000Z","updated_at":"2020-02-11T05:42:38.000Z"}}'),
('SWScrwEPtEWrctuvFaQjLAnn56xYoxpE', 1581483974, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":35,"name":"test","email":"test@gmail.com","password":"$2a$08$SvPZ.yjTcFndM393YT3zn.6bHraGxMB32kdc8sdtbP3b0MYpvqFGS","type":"service_provider","created_at":"2020-02-09T06:30:28.000Z","updated_at":"2020-02-09T06:30:28.000Z"}}'),
('X_HCLwRG3-cpR-aYlEItJgMetO53pVRV', 1581505373, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":38,"name":"hj01","email":"hj01@gmail.com","password":"$2a$08$Oih61b.8Jw6dnQ/tsAAhvebH9548COu6G6rH5TVa5RffDTHuCb40y","type":"service_provider","created_at":"2020-02-11T11:02:47.000Z","updated_at":"2020-02-11T11:02:47.000Z"}}'),
('aOTfhu1nJsTtEvXYKQtkT-B1EFpexqfy', 1581484402, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":1,"name":"admin","email":"admin@admin.com","password":"$2a$08$QWRosZWHHUU62ftA1vZp1.FbEE4tckZLu5ckpkLVEupBYm4sjBM9u","type":"admin","created_at":"2020-01-30T14:25:31.000Z","updated_at":"2020-01-30T14:25:31.000Z"}}'),
('bb5DSrL2QgV36UyfUJt183QS7xJpb4PE', 1581505943, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":39,"name":"hjtest","email":"hjtest@gmail.com","password":"$2a$08$u9aABHclyAk5l7tUc5.OgOsk5pWAWl736w4oSkWh6nOuIdl6hhTba","type":"customer","created_at":"2020-02-11T11:12:22.000Z","updated_at":"2020-02-11T11:12:22.000Z"}}'),
('ertSIpibSXomRM2VBscZAkCE9Nonn2hr', 1581492939, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":1,"name":"admin","email":"admin@admin.com","password":"$2a$08$QWRosZWHHUU62ftA1vZp1.FbEE4tckZLu5ckpkLVEupBYm4sjBM9u","type":"admin","created_at":"2020-01-30T14:25:31.000Z","updated_at":"2020-01-30T14:25:31.000Z"}}'),
('hcf8HjDMEJm5R9h3FTgyHZr1_LhXloVK', 1581490909, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":37,"name":"re","email":"re1@gmail.com","password":"$2a$08$iIqocuVAjt4m0zbt2gs9r.J8T7V/VGY.9xbO.Qzbg99IS0U6vFmem","type":"customer","created_at":"2020-02-11T05:42:38.000Z","updated_at":"2020-02-11T05:42:38.000Z"}}'),
('oEVKcVFs1YUOFPXoPQ29q0baKC7I3npU', 1581506133, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":39,"name":"hjtest","email":"hjtest@gmail.com","password":"$2a$08$u9aABHclyAk5l7tUc5.OgOsk5pWAWl736w4oSkWh6nOuIdl6hhTba","type":"customer","created_at":"2020-02-11T11:12:22.000Z","updated_at":"2020-02-11T11:12:22.000Z"}}'),
('p24uKmSUGJqhojWRmM2TFlvmnPLakRIB', 1581482998, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":35,"name":"test","email":"test@gmail.com","password":"$2a$08$SvPZ.yjTcFndM393YT3zn.6bHraGxMB32kdc8sdtbP3b0MYpvqFGS","type":"service_provider","created_at":"2020-02-09T06:30:28.000Z","updated_at":"2020-02-09T06:30:28.000Z"}}'),
('qlxBfGJxkCPzbG1JC1RohP5lkK8wt2Hb', 1581490740, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":37,"name":"re","email":"re1@gmail.com","password":"$2a$08$iIqocuVAjt4m0zbt2gs9r.J8T7V/VGY.9xbO.Qzbg99IS0U6vFmem","type":"customer","created_at":"2020-02-11T05:42:38.000Z","updated_at":"2020-02-11T05:42:38.000Z"}}'),
('r0LZlEFQpjUi_FSavFF8qoOaKWsitd9K', 1581483177, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":35,"name":"test","email":"test@gmail.com","password":"$2a$08$SvPZ.yjTcFndM393YT3zn.6bHraGxMB32kdc8sdtbP3b0MYpvqFGS","type":"service_provider","created_at":"2020-02-09T06:30:28.000Z","updated_at":"2020-02-09T06:30:28.000Z"}}'),
('sEpKOlM7hX9sdzsGfgUCoRmsa1cSu7K5', 1581489951, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":37,"name":"re","email":"re1@gmail.com","password":"$2a$08$iIqocuVAjt4m0zbt2gs9r.J8T7V/VGY.9xbO.Qzbg99IS0U6vFmem","type":"customer","created_at":"2020-02-11T05:42:38.000Z","updated_at":"2020-02-11T05:42:38.000Z"}}'),
('tdvDXuqvmsk3JOngJvX4PcgaNgwYUebl', 1581491027, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":37,"name":"re","email":"re1@gmail.com","password":"$2a$08$iIqocuVAjt4m0zbt2gs9r.J8T7V/VGY.9xbO.Qzbg99IS0U6vFmem","type":"customer","created_at":"2020-02-11T05:42:38.000Z","updated_at":"2020-02-11T05:42:38.000Z"}}'),
('uhh-8uPf_3LsNnIDolvDLv9u3ZjeIKzz', 1581501711, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":37,"name":"re","email":"re1@gmail.com","password":"$2a$08$iIqocuVAjt4m0zbt2gs9r.J8T7V/VGY.9xbO.Qzbg99IS0U6vFmem","type":"customer","created_at":"2020-02-11T05:42:38.000Z","updated_at":"2020-02-11T05:42:38.000Z"}}'),
('vgGfhQ8yC93BePb096jdynVqrGO89ik8', 1581491993, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":1,"name":"admin","email":"admin@admin.com","password":"$2a$08$QWRosZWHHUU62ftA1vZp1.FbEE4tckZLu5ckpkLVEupBYm4sjBM9u","type":"admin","created_at":"2020-01-30T14:25:31.000Z","updated_at":"2020-01-30T14:25:31.000Z"}}'),
('wVwtBBdt814jxgme9KouT9nucuYbpmix', 1581489735, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":37,"name":"re","email":"re1@gmail.com","password":"$2a$08$iIqocuVAjt4m0zbt2gs9r.J8T7V/VGY.9xbO.Qzbg99IS0U6vFmem","type":"customer","created_at":"2020-02-11T05:42:38.000Z","updated_at":"2020-02-11T05:42:38.000Z"}}'),
('wWlBiYjKZdtXp4LNabRReyolwA1nXpWE', 1581505949, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":39,"name":"hjtest","email":"hjtest@gmail.com","password":"$2a$08$u9aABHclyAk5l7tUc5.OgOsk5pWAWl736w4oSkWh6nOuIdl6hhTba","type":"customer","created_at":"2020-02-11T11:12:22.000Z","updated_at":"2020-02-11T11:12:22.000Z"}}'),
('wp-yuYvnp1IiNJy8Co-4e7ogF0KH6jPz', 1581505004, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":1,"name":"admin","email":"admin@admin.com","password":"$2a$08$QWRosZWHHUU62ftA1vZp1.FbEE4tckZLu5ckpkLVEupBYm4sjBM9u","type":"admin","created_at":"2020-01-30T14:25:31.000Z","updated_at":"2020-01-30T14:25:31.000Z"}}'),
('yX6igAmR1M3FTBk0vnpv_5tA1iHay-U2', 1581486170, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"isLoggedIn":true,"user":{"id":1,"name":"admin","email":"admin@admin.com","password":"$2a$08$QWRosZWHHUU62ftA1vZp1.FbEE4tckZLu5ckpkLVEupBYm4sjBM9u","type":"admin","created_at":"2020-01-30T14:25:31.000Z","updated_at":"2020-01-30T14:25:31.000Z"}}');

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
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `type`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@admin.com', '$2a$08$QWRosZWHHUU62ftA1vZp1.FbEE4tckZLu5ckpkLVEupBYm4sjBM9u', 'admin', '2020-01-30 14:25:31', '2020-01-30 14:25:31'),
(35, 'test', 'test@gmail.com', '$2a$08$SvPZ.yjTcFndM393YT3zn.6bHraGxMB32kdc8sdtbP3b0MYpvqFGS', 'service_provider', '2020-02-09 06:30:28', '2020-02-09 06:30:28'),
(37, 're', 're1@gmail.com', '$2a$08$iIqocuVAjt4m0zbt2gs9r.J8T7V/VGY.9xbO.Qzbg99IS0U6vFmem', 'customer', '2020-02-11 05:42:38', '2020-02-11 05:42:38'),
(38, 'hj01', 'hj01@gmail.com', '$2a$08$Oih61b.8Jw6dnQ/tsAAhvebH9548COu6G6rH5TVa5RffDTHuCb40y', 'service_provider', '2020-02-11 11:02:47', '2020-02-11 11:02:47'),
(39, 'hjtest', 'hjtest@gmail.com', '$2a$08$u9aABHclyAk5l7tUc5.OgOsk5pWAWl736w4oSkWh6nOuIdl6hhTba', 'customer', '2020-02-11 11:12:22', '2020-02-11 11:12:22');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
