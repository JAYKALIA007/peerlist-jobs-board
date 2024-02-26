export const JOB_POSTED_BY_IMG_URL = `https://s3-alpha-sig.figma.com/img/0158/d235/8a2f9c17827a13138a51706a42039a3d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i14RkhZsWWGrHRQCKFUao3oYfRJg2-4C3afwoz4FpuNFZSXBRUy-eT--bXYs6eOQQYq4xZwoblqvtg6g74O2Uk61dt6a2fC24VPstqRKtsgphXAOcdTXNViiH4YlqtoMO0fRY6MnAUBVurT~xhy6rjZkbosiTTI5-LbIqoh5wgPQh8E3DeyAvwjo0ybbHI9DG0Sq5tA~awu29ljvZhih1zZpdCNTDWns5u9sh3GHOdLPH23Jhx~VBWe45S2MCi0MuXeot9R4-qiI-RugLz5Mc6w7G-0~yZSNIoO9s0JcFFP12xqa~doEzm0pFhFh5nrLOEOg-TXA5QeNEBFmlp-x2A__`;

export const REJECTED = "rejected";
export const APPLIED = "applied";
export const SHORTLISTED = "shortlisted";

export const CANDIDATES = [
  {
    name: "Alice Johnson",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/9761/9dc4/3978998e709bbd5ec72473e5d351cf56?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kq6MwERlU9aZOhfb5BWvR6eDuZUdKmKJgY~4Kn62Gbvxe5wl6N~GD7K-hG31zrSS2bY2g3AkR3vF-m9uUV5mxmMqQI94M1jh9bCLwUfmlIf5vYLf1WK4U2gBejVev3VWwqWPcli3Hr8CoBrfj6dwqxeTY0vZ29mEk5x2MFlyIgf5eTX52bYNP3cOgeucRYN5-BrYcdPdaUzWJRloBdbS1r2ZQH356bHIiAAEQPNpfDtwIKq9mFXfHeqnOKB7J8~bZp5q4kL0EQTSsUZZjKaqbqQZQZc981r6bq4p2YXvhx8jSP06bm-qOzgmUSl69CtXzEUoMJ47fQL1ao4qoR3Kdw__",
    designation: "Senior Developer",
    experience: {
      years: 7,
      months: 9,
    },
    holdingOffer: true,
    contact: {
      email: "alice.johnson@example.com",
      phone: "+1 12345 67490",
    },
    noticePeriod: "immediate",
    status: "applied",
  },
  {
    name: "Bob Anderson",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/d774/9e96/594059accb4d1ad074bc37a5d2e694af?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtU~Hm4FjT7AAz2lPwvK91rojgeuyuhFwvkB7T3x~mDdlifHPgff~UG~6Kb1j9EXaEjgZq3Ax~V6nNuJXLJUsX7pL759A9tOJNodDzqNhiYxe2oLp6c5xUv-D5SQdx67XYttzpNVz-7NLyCeiYXDaKKBbOCrag0cKcTg90sZnl17GJHYgDwfx65YMfnp5vqHiLtgi8Nh6BPeVmxSOX6tM~cONISpEfIGBHYAINijZ1N5bvaooPRzNFAJd3kxp-UWUBR83Mtcrd1UT5uTOgDmbeiLb7mG~7OVBekDyenPzffkAfDs1XTvSlvAqY0JnbnWt~xIfNB7gQnFxVbUjLB0FA__",
    designation: "UX Designer",
    experience: {
      years: 4,
      months: 2,
    },
    holdingOffer: false,
    contact: {
      email: "bob.anderson@example.com",
      phone: "+1 12345 67490",
    },
    noticePeriod: "immediate",
    status: "shortlisted",
  },
  {
    name: "David Smith",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/8e5c/9113/cf0504691ca0b760d1c0556f15fe2536?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJAmg6ckroA1cKCXMrrfr2fLcV8wKgqyxq-fvpLAb7DvzRHvh7qh5~ycWOq5sPGObgkqnhkwrQ1xTHR~G32~jWaTqBGjOyoCRfDcRicCBHASZowp4ZJj7Bv~VRKb5m8dIV9Ulo~P-VSf2hIYJ82jWK41WEuBjT8eDrvB3oRFxiNsUStpjc9k~VrMPshqF~FMUeCj27nRGZqgVWjFngfNmlsaF7tkAAsDx6dqlyQIuJEwntxQlWmxnqo-s5EWCyIvg7pYCr8lHHMedNX7uampTQRs2MjaVw4DIUZ1R-xqSghsdsoP~zkD8NWGSLp4aSaT6GbfWgujZZsM4Rhe6dvfRg__",
    designation: "Data Analyst",
    experience: {
      years: 3,
      months: 11,
    },
    holdingOffer: true,
    contact: {
      email: "david.smith@example.com",
      phone: "+1 12345 67490",
    },
    noticePeriod: "immediate",
    status: "applied",
  },
  {
    name: "Emma White",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/d1de/8962/f6d39ad495a3916f45b76337109fb56c?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=clYAG4AaYy6WZj3SVeCwy5qlDe1eafbILRJk8JBp0zxGMcvSlXF2EBghA~Ik1fA18uFg-7xNWhm1ZZApOst0YefW4MPQeN0C0wuBvuMlqk~xNukcyn9Z4w2s3ZH6ue~Vs6FM-q3HwtMzO4cmhE5DzTNS2TV~eH3~9pc52RnMU7QC5eSS~0uLD6LYcP26e3-Z0Ksd-CrJwIpFaGLU8~XWeJyDBYzJ2mGka4jOBUf6xLRQcIOJaP8WrPtxHrIK9OtvXv0Nl79M2aNlDiSWjz81p1SiDMpDnXnv7rL2kkT0TxNdxDSd0e-fiwN0koOWTEx2DX62BjYV~6ZmGNU7LZ5-zA__",
    designation: "Marketing Specialist",
    experience: {
      years: 5,
      months: 7,
    },
    holdingOffer: false,
    contact: {
      email: "emma.white@example.com",
      phone: "+1 12345 67490",
    },
    noticePeriod: "immediate",
    status: "shortlisted",
  },
  {
    name: "Grace Miller",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/1e94/843a/8595cf43a3919fd63e2edfe4b1979dab?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APKrS1sPTJMps35Jow-xkkUMhFFaijUSIvmm03DJ6TTYfUa3NkLCID4nvo4ebhgz0pqTOUk1SUHYvEzy7HaBLYffgxTm3iDi5XC5oosH2vXK-EKcEvKoFFC-fFz5Jz3AUQbH5X~WrI2rvT3s-fxhsuHYPaCofK1qGx-M~YugVsjsBBKpDi3qk7lK0LXZjAhq7SI15AYgpujy-QeDwsEBJyliKJQ2zv6I9CB1K95FD4iqnYD28he58PzDBiH7ZXYR9VsX2GZ2h-IQh-zeRKD4r-BHvBZZps~Hv-fkAhsZPuU1mfYQxaC4j4iOZgwJM~9sztsn34Sghb4VNNlIso~cAg__",
    designation: "Financial Analyst",
    experience: {
      years: 4,
      months: 8,
    },
    holdingOffer: false,
    contact: {
      email: "grace.miller@example.com",
      phone: "12345 67490",
    },
    noticePeriod: "immediate",
    status: "shortlisted",
  },
  {
    name: "Jackie Adams",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/dc90/b21c/3d578813b89e9032222bbf2134b470c6?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CnFTGScJa4flFZl6BfosFSzzDOqvRtXUkVySj-1ikLk-US25zcYJo094zZPY6PkDmbVGDyEbv431~H2UKEpjgd7PPjtpWh-wA4j2UxDYjTEluIHJeibAQpkyscUTRgL6uqvxSljyCr3lPajMy99csuREERVHRajs1OL2K8LeoWmHk3EObgXPbIGM-72MY6SrTH4snlFC4qf57tJlQ8sG5Jx1YW236MlXV~FtXXOYxG7FsRbdCNumTCStPKq4TJ56ixjiu9mNQCMhUexRM32OdrAlDymoGa6ZHVlU~JiT0BGzOF2-bqoYCPecs27avbXxCRWBf95Z4DnGW79VrOmzvQ__",
    designation: "Graphic Designer",
    experience: {
      years: 3,
      months: 6,
    },
    holdingOffer: false,
    contact: {
      email: "jackie.adams@example.com",
      phone: "2345 67490",
    },
    noticePeriod: "immediate",
    status: "shortlisted",
  },
  {
    name: "Michael Turner",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/d774/9e96/594059accb4d1ad074bc37a5d2e694af?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtU~Hm4FjT7AAz2lPwvK91rojgeuyuhFwvkB7T3x~mDdlifHPgff~UG~6Kb1j9EXaEjgZq3Ax~V6nNuJXLJUsX7pL759A9tOJNodDzqNhiYxe2oLp6c5xUv-D5SQdx67XYttzpNVz-7NLyCeiYXDaKKBbOCrag0cKcTg90sZnl17GJHYgDwfx65YMfnp5vqHiLtgi8Nh6BPeVmxSOX6tM~cONISpEfIGBHYAINijZ1N5bvaooPRzNFAJd3kxp-UWUBR83Mtcrd1UT5uTOgDmbeiLb7mG~7OVBekDyenPzffkAfDs1XTvSlvAqY0JnbnWt~xIfNB7gQnFxVbUjLB0FA__",
    designation: "Business Analyst",
    experience: {
      years: 4,
      months: 3,
    },
    holdingOffer: true,
    contact: {
      email: "michael.turner@example.com",
      phone: "+1 12345 67490",
    },
    noticePeriod: "immediate",
    status: "applied",
  },
  {
    name: "Nancy Evans",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/d774/9e96/594059accb4d1ad074bc37a5d2e694af?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtU~Hm4FjT7AAz2lPwvK91rojgeuyuhFwvkB7T3x~mDdlifHPgff~UG~6Kb1j9EXaEjgZq3Ax~V6nNuJXLJUsX7pL759A9tOJNodDzqNhiYxe2oLp6c5xUv-D5SQdx67XYttzpNVz-7NLyCeiYXDaKKBbOCrag0cKcTg90sZnl17GJHYgDwfx65YMfnp5vqHiLtgi8Nh6BPeVmxSOX6tM~cONISpEfIGBHYAINijZ1N5bvaooPRzNFAJd3kxp-UWUBR83Mtcrd1UT5uTOgDmbeiLb7mG~7OVBekDyenPzffkAfDs1XTvSlvAqY0JnbnWt~xIfNB7gQnFxVbUjLB0FA__",
    designation: "Customer Support Specialist",
    experience: {
      years: 2,
      months: 7,
    },
    holdingOffer: false,
    contact: {
      email: "nancy.evans@example.com",
      phone: "+1 12345 67490",
    },
    noticePeriod: "immediate",
    status: "shortlisted",
  },
  {
    name: "Oliver Mitchell",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/d774/9e96/594059accb4d1ad074bc37a5d2e694af?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtU~Hm4FjT7AAz2lPwvK91rojgeuyuhFwvkB7T3x~mDdlifHPgff~UG~6Kb1j9EXaEjgZq3Ax~V6nNuJXLJUsX7pL759A9tOJNodDzqNhiYxe2oLp6c5xUv-D5SQdx67XYttzpNVz-7NLyCeiYXDaKKBbOCrag0cKcTg90sZnl17GJHYgDwfx65YMfnp5vqHiLtgi8Nh6BPeVmxSOX6tM~cONISpEfIGBHYAINijZ1N5bvaooPRzNFAJd3kxp-UWUBR83Mtcrd1UT5uTOgDmbeiLb7mG~7OVBekDyenPzffkAfDs1XTvSlvAqY0JnbnWt~xIfNB7gQnFxVbUjLB0FA__",
    designation: "Quality Assurance Analyst",
    experience: {
      years: 5,
      months: 5,
    },
    holdingOffer: true,
    contact: {
      email: "oliver.mitchell@example.com",
      phone: "+1 12345 67490",
    },
    noticePeriod: "immediate",
    status: "applied",
  },
  {
    name: "Paige Turner",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/d774/9e96/594059accb4d1ad074bc37a5d2e694af?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtU~Hm4FjT7AAz2lPwvK91rojgeuyuhFwvkB7T3x~mDdlifHPgff~UG~6Kb1j9EXaEjgZq3Ax~V6nNuJXLJUsX7pL759A9tOJNodDzqNhiYxe2oLp6c5xUv-D5SQdx67XYttzpNVz-7NLyCeiYXDaKKBbOCrag0cKcTg90sZnl17GJHYgDwfx65YMfnp5vqHiLtgi8Nh6BPeVmxSOX6tM~cONISpEfIGBHYAINijZ1N5bvaooPRzNFAJd3kxp-UWUBR83Mtcrd1UT5uTOgDmbeiLb7mG~7OVBekDyenPzffkAfDs1XTvSlvAqY0JnbnWt~xIfNB7gQnFxVbUjLB0FA__",
    designation: "Content Writer",
    experience: {
      years: 3,
      months: 2,
    },
    holdingOffer: false,
    contact: {
      email: "paige.turner@example.com",
      phone: "+1 12345 67490",
    },
    noticePeriod: "immediate",
    status: "shortlisted",
  },
  {
    name: "Quentin Reed",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/d774/9e96/594059accb4d1ad074bc37a5d2e694af?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtU~Hm4FjT7AAz2lPwvK91rojgeuyuhFwvkB7T3x~mDdlifHPgff~UG~6Kb1j9EXaEjgZq3Ax~V6nNuJXLJUsX7pL759A9tOJNodDzqNhiYxe2oLp6c5xUv-D5SQdx67XYttzpNVz-7NLyCeiYXDaKKBbOCrag0cKcTg90sZnl17GJHYgDwfx65YMfnp5vqHiLtgi8Nh6BPeVmxSOX6tM~cONISpEfIGBHYAINijZ1N5bvaooPRzNFAJd3kxp-UWUBR83Mtcrd1UT5uTOgDmbeiLb7mG~7OVBekDyenPzffkAfDs1XTvSlvAqY0JnbnWt~xIfNB7gQnFxVbUjLB0FA__",
    designation: "IT Support Specialist",
    experience: {
      years: 6,
      months: 8,
    },
    holdingOffer: true,
    contact: {
      email: "quentin.reed@example.com",
      phone: "+1 12345 67490",
    },
    noticePeriod: "immediate",
    status: "applied",
  },
  {
    name: "Rachel Brown",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/d774/9e96/594059accb4d1ad074bc37a5d2e694af?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtU~Hm4FjT7AAz2lPwvK91rojgeuyuhFwvkB7T3x~mDdlifHPgff~UG~6Kb1j9EXaEjgZq3Ax~V6nNuJXLJUsX7pL759A9tOJNodDzqNhiYxe2oLp6c5xUv-D5SQdx67XYttzpNVz-7NLyCeiYXDaKKBbOCrag0cKcTg90sZnl17GJHYgDwfx65YMfnp5vqHiLtgi8Nh6BPeVmxSOX6tM~cONISpEfIGBHYAINijZ1N5bvaooPRzNFAJd3kxp-UWUBR83Mtcrd1UT5uTOgDmbeiLb7mG~7OVBekDyenPzffkAfDs1XTvSlvAqY0JnbnWt~xIfNB7gQnFxVbUjLB0FA__",
    designation: "Event Coordinator",
    experience: {
      years: 4,
      months: 10,
    },
    holdingOffer: false,
    contact: {
      email: "rachel.brown@example.com",
      phone: "+1 12345 67490",
    },
    noticePeriod: "immediate",
    status: "rejected",
  },
  {
    name: "Samuel Walker",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/d774/9e96/594059accb4d1ad074bc37a5d2e694af?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtU~Hm4FjT7AAz2lPwvK91rojgeuyuhFwvkB7T3x~mDdlifHPgff~UG~6Kb1j9EXaEjgZq3Ax~V6nNuJXLJUsX7pL759A9tOJNodDzqNhiYxe2oLp6c5xUv-D5SQdx67XYttzpNVz-7NLyCeiYXDaKKBbOCrag0cKcTg90sZnl17GJHYgDwfx65YMfnp5vqHiLtgi8Nh6BPeVmxSOX6tM~cONISpEfIGBHYAINijZ1N5bvaooPRzNFAJd3kxp-UWUBR83Mtcrd1UT5uTOgDmbeiLb7mG~7OVBekDyenPzffkAfDs1XTvSlvAqY0JnbnWt~xIfNB7gQnFxVbUjLB0FA__",
    designation: "Financial Advisor",
    experience: {
      years: 8,
      months: 3,
    },
    holdingOffer: true,
    contact: {
      email: "samuel.walker@example.com",
      phone: "+1 12345 67490",
    },
    noticePeriod: "immediate",
    status: "applied",
  },
];
