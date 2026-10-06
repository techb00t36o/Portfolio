Feature: Checkout Flow
  As a customer
  I want to complete my purchase
  So that I receive my products

  Background:
    Given I am a registered user
    And I have items in my cart
    And I am logged in

  @critical @happy-path
  Scenario: Successful checkout with saved payment method
    Given I have a saved credit card ending in "4242"
    And I have a default shipping address
    When I navigate to checkout
    And I select my saved payment method
    And I confirm the order
    Then I should see the order confirmation page
    And I should receive an order confirmation email
    And my cart should be empty

  @critical @happy-path
  Scenario: Successful checkout with new payment method
    Given I do not have a saved payment method
    When I navigate to checkout
    And I enter valid credit card details
    And I enter a valid shipping address
    And I confirm the order
    Then I should see the order confirmation page
    And the payment method should be saved for future use

  @critical @edge-case
  Scenario: Checkout with insufficient inventory
    Given an item in my cart has only 1 unit in stock
    And another user purchases the last unit
    When I attempt to checkout
    Then I should see an inventory error message
    And the item should be removed from my cart
    And I should be redirected to cart page

  @critical @error-handling
  Scenario: Payment declined
    Given I enter a credit card that will be declined
    When I confirm the order
    Then I should see a payment error message
    And my order should not be created
    And my cart should remain intact

  @high @cross-browser
  Scenario: Checkout on mobile viewport
    Given I am on a mobile device (375x667)
    When I complete the checkout flow
    Then all form fields should be accessible
    And the payment form should be mobile-optimized
    And I should complete checkout without horizontal scroll

  @medium @accessibility
  Scenario: Checkout with screen reader
    Given I am using a screen reader (NVDA/VoiceOver)
    When I navigate through checkout
    Then all form fields should have proper labels
    And error messages should be announced
    And focus management should be logical

  @medium @security
  Scenario: Prevent double submission
    Given I click the place order button rapidly
    When the first request is processing
    Then subsequent clicks should be ignored
    And only one order should be created
