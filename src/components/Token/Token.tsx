import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { TokenStorageService } from './TokenStorageService';

jest.mock('react', () => ({
 ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('TokenStorageService', () => {
  let service: TokenStorageService;

  beforeEach(() => {
    service = new TokenStorageService();
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  describe('saveToken', () => { 
    it('should save the token to sessionStorage', () => {
      const mockToken = 'testToken';
      const spy = jest.spyOn(sessionStorage, 'setItem').mockImplementation(() => {});

      act(() => {
        service.saveToken(mockToken);
      });

      expect(sessionStorage.setItem).toHaveBeenCalledWith('auth-token', mockToken);
      spy.mockRestore();
    });
  });

  describe('getToken', () => {
    it('should return the saved token', () => {
      const mockToken = 'testToken';
      Object.defineProperty(sessionStorage, 'getItem', {
        value: jest.fn().mockReturnValue(mockToken),
      });

      const result = service.getToken();

      expect(result).toBe(mockToken);
    });
  });

  // Additional tests for saveUser, getUser, and signOut...
});