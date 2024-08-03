import { FC } from 'react';
import { Card as Root, type CardProps } from './Card'
import { Body } from './CardBody'
import { Media } from './CardMedia'
import { Content } from './CardContent';
import { HighlightText } from './CardHighlightText';
import { Description } from './CardDescription';
import { Footer } from './CardFooter';
import { ReadingTime } from './CardReadingTime';
import { Chip } from './CardChip';

export const Card: FC<CardProps> & {
    Media: typeof Media
    Content: typeof Content
    Body: typeof Body
    HighlightText: typeof HighlightText
    Description: typeof Description
    Footer: typeof Footer
    ReadingTime: typeof ReadingTime
    Chip: typeof Chip
} = Root as FC<CardProps> & {
    Media: typeof Media
    Content: typeof Content
    Body: typeof Body
    HighlightText: typeof HighlightText
    Description: typeof Description
    Footer: typeof Footer
    ReadingTime: typeof ReadingTime
    Chip: typeof Chip
};

Card.Media = Media;
Card.Content = Content;
Card.Body = Body;
Card.HighlightText = HighlightText;
Card.Description = Description;
Card.Footer = Footer;
Card.ReadingTime = ReadingTime;
Card.Chip = Chip;

Card.displayName = 'Card'