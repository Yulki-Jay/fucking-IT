#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Convert a single .ipynb notebook to a .py script next to it.
Keeps the original .ipynb (does not delete anything).

Usage:
  python ipynb_to_py.py path/to/notebook.ipynb
  python ipynb_to_py.py path/to/notebook.ipynb --no-overwrite
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

import nbformat
from nbconvert import PythonExporter


def convert(ipynb_path: Path, overwrite: bool = True) -> Path:
    if ipynb_path.suffix.lower() != ".ipynb":
        raise ValueError(f"Input must be a .ipynb file, got: {ipynb_path}")

    if not ipynb_path.exists() or not ipynb_path.is_file():
        raise FileNotFoundError(f"File not found: {ipynb_path}")

    out_path = ipynb_path.with_suffix(".py")
    if out_path.exists() and not overwrite:
        return out_path

    nb = nbformat.read(str(ipynb_path), as_version=4)
    exporter = PythonExporter()
    body, _ = exporter.from_notebook_node(nb)

    out_path.write_text(body, encoding="utf-8")
    return out_path


def main() -> int:
    parser = argparse.ArgumentParser(description="Convert a single .ipynb to .py (same folder).")
    parser.add_argument("ipynb", help="Path to the .ipynb file")
    parser.add_argument("--no-overwrite", action="store_true", help="Skip if .py already exists")
    args = parser.parse_args()

    ipynb_path = Path(args.ipynb).expanduser().resolve()
    try:
        out = convert(ipynb_path, overwrite=not args.no_overwrite)
        if out.exists():
            print(f"[OK] {ipynb_path} -> {out}")
        else:
            print(f"[SKIP] {ipynb_path} (output already exists and --no-overwrite set)")
        return 0
    except Exception as e:
        print(f"[ERROR] {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())