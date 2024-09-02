ALTER TABLE `users`
    CHANGE COLUMN `password` `hashedPassword` VARCHAR(191) NOT NULL AFTER `email`;
