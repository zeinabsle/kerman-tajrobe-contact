import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_RAW,
  PHONE_TEL_URI,
  BUSINESS_HOURS,
  ADDRESS_INFO,
  CONTACT_CHANNELS,
  isValidIranianPhone,
  formatTelLink,
  getNavigationUrl,
} from './contact';

test('phone number matches updated requirements (0901 370 2037)', () => {
  assert.equal(PHONE_NUMBER_DISPLAY, '0901 370 2037');
  assert.equal(PHONE_NUMBER_RAW, '09013702037');
  assert.equal(PHONE_TEL_URI, 'tel:09013702037');
  assert.equal(isValidIranianPhone(PHONE_NUMBER_DISPLAY), true);
  assert.equal(formatTelLink(PHONE_NUMBER_DISPLAY), 'tel:09013702037');
});

test('business hours matches exact requirements', () => {
  assert.equal(BUSINESS_HOURS.fullSchedule, 'شنبه تا پنجشنبه: ۱۰:۰۰ تا ۲۴:۰۰');
  assert.equal(BUSINESS_HOURS.days, 'شنبه تا پنجشنبه');
  assert.equal(BUSINESS_HOURS.hours, '۱۰:۰۰ تا ۲۴:۰۰');
});

test('address info preserves Zarisaf and coordinates', () => {
  assert.equal(ADDRESS_INFO.city, 'کرمان');
  assert.equal(ADDRESS_INFO.district, 'خیابان زریسف');
  assert.ok(ADDRESS_INFO.fullAddress.startsWith('کرمان، خیابان زریسف'));
  assert.equal(ADDRESS_INFO.lat, 30.2839);
  assert.equal(ADDRESS_INFO.lng, 57.0788);
  assert.ok(ADDRESS_INFO.embedUrl.includes('output=embed'));
});

test('all 4 contact channels have valid destinations with the new phone', () => {
  const telegram = CONTACT_CHANNELS.find((c) => c.id === 'telegram');
  assert.ok(telegram?.url.includes('989013702037'));

  const whatsapp = CONTACT_CHANNELS.find((c) => c.id === 'whatsapp');
  assert.ok(whatsapp?.url.includes('989013702037'));

  const bale = CONTACT_CHANNELS.find((c) => c.id === 'bale');
  assert.ok(bale?.url.includes('ble.ir'));

  const rubika = CONTACT_CHANNELS.find((c) => c.id === 'rubika');
  assert.ok(rubika?.url.includes('rubika.ir'));
});

test('navigation URL generates correct Google Maps direction link', () => {
  const navUrl = getNavigationUrl(30.2839, 57.0788);
  assert.equal(navUrl, 'https://www.google.com/maps/dir/?api=1&destination=30.2839,57.0788');
});
