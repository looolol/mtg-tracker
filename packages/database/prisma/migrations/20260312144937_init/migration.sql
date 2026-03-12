-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "oracleId" TEXT,
    "price" DOUBLE PRECISION,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
