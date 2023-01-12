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
    PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `NFC`.`car`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `NFC`.`car` ;



-- -----------------------------------------------------
-- Table `NFC`.`park`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `NFC`.`park` ;

CREATE TABLE IF NOT EXISTS `NFC`.`park` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(256) NULL,
    `location` VARCHAR(256) NULL,
    `name` VARCHAR(256) NULL,
    PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `NFC`.`car` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `model` VARCHAR(45) NULL,
    `places` VARCHAR(256) NULL,
    `consumption` VARCHAR(256) NULL,
    `comfort` VARCHAR(256) NULL,
    `park_id` INT NOT NULL,
    `view` VARCHAR(512) NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_car_park_idx` (`park_id` ASC) VISIBLE,
    CONSTRAINT `fk_car_park`
    FOREIGN KEY (`park_id`)
    REFERENCES `NFC`.`park` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;




INSERT INTO park (city, location, name) VALUES 
    ("Nantes", "1234", "SixtCar"),
    ("Paris", "1234", "FranchCar");
INSERT INTO car (model, places, consumption, comfort, park_id, view) VALUES
    ("Clio", "4","11L/100Km","7/10", 1, "https://sketchfab.com/3d-models/renault-clio-moschino-bdf95d3a877141209bd05d5a8c490472"),
    ("Megane", "5", "10L/100Km", "5/10", 1, "https://sketchfab.com/3d-models/renault-megane-ii-a9e27249111c4e4a9b861ff35d1edab9"),
    ("Twizy", "2", "10kw/h", "3/10", 1, "https://sketchfab.com/3d-models/renault-twizy-ab17370588034d8a811d7fef955064c7"),
    ("Master", "3", "15L/100Km", "8/10", 1,"https://sketchfab.com/3d-models/renault-master-volea-da771f3976a64d7d975e3e1bbfef3412" ),
    ("Truck", "4", "20L/100Km", "9/10", 1, "https://sketchfab.com/3d-models/renault-truck-e2fa9fcb75bd415ba15e39209347ba1f"),
    ("1m", "5", "19L/100Km", "7/10", 1, "https://sketchfab.com/3d-models/ac-bmw-1m-f0ac8fa9bf1e4d79a03a4a3ea6d24afa"),
    ("Duster", "5", "12L/100Km", "9/10", 2,"https://sketchfab.com/3d-models/renault-duster-2018-997ae3649b2041d5a76c3e9096c4a07c"),
    ("Kangoo", "7", "14L/100Km", "10/10", 2, "https://sketchfab.com/3d-models/2022-renault-kangoo-c8be028670624738acf838ea38c99fab"),
    ("Twingo", "4", "9L/100Km", "5/10", 2, "https://sketchfab.com/3d-models/gc-veh-renault-twingo-a6247f2a9f404d598f6a220ad69bfa26"),
    ("AMG cls", "5", "25L/100Km", "9/10", 2, "https://sketchfab.com/3d-models/mercedes-benz-amg-cls-4ef108f906e84bcaa3e66bed9b4cef9f"),
    ("g55", "8", "30L/100Km", "10/10", 2, "https://sketchfab.com/3d-models/mercedes-benz-g55w263-amg-34fd2fc081014deab1240ab2a199920a"),
    ("e30", "4", "17L/100Km", "6/10", 2, "https://sketchfab.com/3d-models/bmw-m3-coupe-e30-1986-8fa21fe97a6042a2a09e0b09fd546b91");