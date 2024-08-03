import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Card } from '.'
import imgRunning from 'assets/img/test.jpg'

describe('Card', () => { 
    it('should render', () => {
        // Given
        const highlightText = "Highlight text";
        const description = `“Shortney” – The running shorts by Courtney Dauwalter`;
        const readingTime = "5 min";
        const label = "label";
        const alt = "illustration d'une personne qui cours";

        render(
            <Card>
                <Card.Media 
                    src={imgRunning}
                    alt={alt}
                    component="img"
                />
                <Card.Content>
                    <Card.Body>
                        <Card.HighlightText>{highlightText}</Card.HighlightText>
                        <Card.Description>{description}</Card.Description>
                    </Card.Body>
                    <Card.Footer>
                        <Card.ReadingTime>{readingTime}</Card.ReadingTime>
                        <Card.Chip>{label}</Card.Chip>
                    </Card.Footer>
                </Card.Content>
            </Card>
        );
        
        const cardEl = screen.getByRole('link');

        expect(cardEl).toBeInTheDocument();
        expect(screen.getByAltText(alt)).toBeInTheDocument();
        expect(screen.getByRole('img', {name: alt})).toBeInTheDocument();
        
        expect(screen.getByText(highlightText)).toBeInTheDocument();
        expect(screen.getByText(description)).toBeInTheDocument();
        expect(screen.getByText(readingTime)).toBeInTheDocument();
        expect(screen.getByText(label)).toBeInTheDocument();
    })
})