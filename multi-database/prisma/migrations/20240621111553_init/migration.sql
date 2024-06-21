/*
  Warnings:

  - You are about to drop the `MYSQL1` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MYSQL1";

-- CreateTable
CREATE TABLE "MYSQL2" (
    "id" SERIAL NOT NULL,
    "modal" TEXT NOT NULL,

    CONSTRAINT "MYSQL2_pkey" PRIMARY KEY ("id")
);
