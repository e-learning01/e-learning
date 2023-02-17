-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema e-learning
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema e-learning
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `e-learning` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `e-learning` ;

-- -----------------------------------------------------
-- Table `e-learning`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `e-learning`.`categories` (
  `idcategories` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategories`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `e-learning`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `e-learning`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `img` VARCHAR(450) NOT NULL,
  `age` INT NOT NULL,
  `role` INT NOT NULL,
  `speciality` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `e-learning`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `e-learning`.`courses` (
  `idcourses` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `price` FLOAT NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `duration` VARCHAR(45) NOT NULL,
  `language` VARCHAR(45) NOT NULL,
  `instructor` INT NOT NULL,
  `cat` INT NOT NULL,
  PRIMARY KEY (`idcourses`),
  INDEX `kaf_idx` (`instructor` ASC) VISIBLE,
  INDEX `categ_idx` (`cat` ASC) VISIBLE,
  CONSTRAINT `categ`
    FOREIGN KEY (`cat`)
    REFERENCES `e-learning`.`categories` (`idcategories`),
  CONSTRAINT `kaf`
    FOREIGN KEY (`instructor`)
    REFERENCES `e-learning`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `e-learning`.`learn`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `e-learning`.`learn` (
  `iduser` INT NOT NULL,
  `idcourse` INT NOT NULL,
  PRIMARY KEY (`iduser`, `idcourse`),
  INDEX `pt_idx` (`idcourse` ASC) VISIBLE,
  CONSTRAINT `pt`
    FOREIGN KEY (`idcourse`)
    REFERENCES `e-learning`.`courses` (`idcourses`),
  CONSTRAINT `pt2`
    FOREIGN KEY (`iduser`)
    REFERENCES `e-learning`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
