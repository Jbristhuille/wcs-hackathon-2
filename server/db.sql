DROP DATABASE NFC;

CREATE DATABASE NFC;
USE `NFC` ;

-- -----------------------------------------------------
-- Table `NFC`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `NFC`.`user` ;

CREATE TABLE IF NOT EXISTS `NFC`.`user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `pseudo` VARCHAR(256) NULL,
    `password` VARCHAR(256) NULL,
    PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NFC`.`car`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `NFC`.`car` ;

CREATE TABLE IF NOT EXISTS `NFC`.`car` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `model` VARCHAR(45) NULL,
    `places` VARCHAR(256) NULL,
    `consumption` VARCHAR(256) NULL,
    `comfort` VARCHAR(256) NULL,
    `view` VARCHAR(512) NULL,
    PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NFC`.`park`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `NFC`.`park` ;

CREATE TABLE IF NOT EXISTS `NFC`.`park` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(256) NULL,
    `location` VARCHAR(256) NULL,
    `car_id` INT NOT NULL,
    `name` VARCHAR(256) NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_park_car_idx` (`car_id` ASC) VISIBLE,
    CONSTRAINT `fk_park_car`
    FOREIGN KEY (`car_id`)
    REFERENCES `NFC`.`car` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



INSERT INTO car (model) VALUES
    ("toyota") ;

INSERT INTO park (city, car_id) VALUES 
    ("black", 1);