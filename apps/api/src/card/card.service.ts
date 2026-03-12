import { Injectable } from '@nestjs/common';
import { prisma } from '@mtg/database';

@Injectable()
export class CardService {
    async findAll() {
        return prisma.card.findMany();
    }

    async findById(id: string) {
        return prisma.card.findUnique({
            where: { id },
        });
    }
}