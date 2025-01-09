import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Greeting } from './Greeting';

describe('Greeting', () => {
  it('should return greeting with name', () => {
    render(<Greeting name="John" />);

    // Исправленный тест
    expect(screen.getByText('Hello, John')).toBeInTheDocument();
  });
});
